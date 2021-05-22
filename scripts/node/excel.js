import xlsx from 'node-xlsx';
import pgPromise from 'pg-promise';
import fsExtra from 'fs-extra';
import { ArgumentParser } from 'argparse';
import { uuid5 } from './cfg.js';

const pgp = pgPromise();


const parse = new ArgumentParser();

parse.add_argument('-m', '--name-map', {type: "str"});
parse.add_argument('files', {"type": "str", "nargs":"+"})
parse.add_argument('-d', '--debug', {type: "str", choices: ["student"]});
parse.add_argument('--org', {type: "str", required: true})
const args = parse.parse_args(process.argv.slice(2));

const organisation_id = args.org
const nameMap = args.name_map ? await fsExtra.readJson(args.name_map) : {}

console.warn("Files", args.files);

console.warn('Reading excel')
const worksheets = args.files.map(file => xlsx.parse(file));

console.warn('Crunching data')
const entries = worksheets.flatMap(worksheet => worksheet.flatMap((value) => handleSheet(value.name, value.data))
.map((val) => ({
  ...val, 
  day: ExcelDateToJSDate(val.day), 
  name: mapName(val.name), 
  state: mapState(val.state),
})));


const students = [...new Set(entries.map(val => val.name))].map(name => ({name, id: uuid5(name), organisation_id,}))
const studentsIds = students.reduce((p, c) => ({...p, [c.name]: c.id}), {});
console.warn("Students:", students.length)


const lessons = [... new Set(entries.map(val => val.day.getTime()))].map(s => ({
  start_time: new Date(s), 
  id: uuid5(new Date(s).toISOString()), 
  name: 'Importiertes Training',
  organisation_id,
}));
const lessonsIds = lessons.reduce((p, c) => ({...p, [c.start_time.toISOString()]: c.id}), {});
console.warn("Lessons:", lessons.length)


const attendance = entries.map(e => ({student_id: studentsIds[e.name], lesson_id: lessonsIds[e.day.toISOString()], state: e.state}))
console.warn("Attendance Entries:", attendance.length)

lessons.sort()
//students.sort()


if (!args.debug) {
  const sql_students = pgp.helpers.insert(students, ['id', 'name', 'organisation_id'], 'student') + ' ON CONFLICT DO NOTHING';
  const sql_lessons = pgp.helpers.insert(lessons, ['id', 'start_time', 'name', 'organisation_id'], 'lesson') + ' ON CONFLICT DO NOTHING';
  const sql_attendance = pgp.helpers.insert(attendance, ['student_id', 'lesson_id', 'state'], 'student_attendance') + ' ON CONFLICT DO NOTHING';

  const sql_all = pgp.helpers.concat([sql_students, sql_lessons, sql_attendance]);

  console.log(sql_all)
} else if (args.debug === 'student') {
  console.log(JSON.stringify(students.map(s=> s.name).sort(), null, 2));
}


/**
 * 
 * @param {String} name 
 * @param {unknown[][]} data 
 */
function handleSheet(name, data) {
  
  const entry = [];
  
  data.shift(); // skip first row
  
  const header = data.shift();

  const idx_to_day = header.reduce((prev, cur, i) => {
    if (typeof cur === 'number') {  
      prev.set(i-1, cur); 
    }
    return prev;
  }, new Map())

  for (const person of data) {
    if (person.length === 0) {
      continue;
    }
    const name = person.shift();
    if (name.indexOf('Total') === -1)
    person.forEach((state, index) => {
      if (state !== undefined) {
        const day = idx_to_day.get(index)
        if (day) {
          entry.push({name, state, day})
        }
      }
    })
  }

  return entry;
}


function ExcelDateToJSDate(date) {
  return new Date(((date - 25569)*86400*1000));
}

function mapState(state) {
  
  if (typeof state === 'string') {
    state = state.toLocaleLowerCase()
  }
  
  switch (state) {
    case 1:
      return 'present';
    case 0:
    case 'e':
      return 'excused';
    default:
      console.warn('Unknows state', state);
    }
}

function mapName(name) {
  const n = name
  .replace(/\(.*\)?/g, '')
  .trim()
  return nameMap[n] ?? n;
}