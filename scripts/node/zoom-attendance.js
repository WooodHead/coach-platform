import pgPromise from 'pg-promise';
import fsExtra from 'fs-extra';
import { ArgumentParser } from 'argparse';
import { uuid5 } from './cfg.js';

const pgp = pgPromise();


const parse = new ArgumentParser();

parse.add_argument('-f', '--data-file', {type: "str", required: true});
parse.add_argument('--org', {type: "str", required: true})
parse.add_argument('-d', '--debug', {type: "str", choices: ["student"]});
parse.add_argument('-m', '--name-map', {type: "str"});
const args = parse.parse_args(process.argv.slice(2));

const organisation_id = args.org;
const nameMap = args.name_map ? await fsExtra.readJson(args.name_map) : {}

const data = await fsExtra.readJSON(args.data_file);

const students = [...new Set(data.flatMap(d => d.attendance))]
  .map(s => nameMap[s] ?? s)
  .map(name => ({name, id: uuid5(name), organisation_id,}));

  const lessons = data.map(t=> ({
  start_time: new Date(t.start), 
  id: uuid5(new Date(t.start).toISOString()), 
  name: 'Zoom Training',
  organisation_id
}))
const studentsIds = students.reduce((p, c) => ({...p, [c.name]: c.id}), {});

const lessonsIds = lessons.reduce((p, c) => ({...p, [c.start_time.toISOString()]: c.id}), {});

const attendance = data.flatMap(d => d.attendance.map(a => ({
  student_id: studentsIds[nameMap[a] ?? a], 
  lesson_id: lessonsIds[new Date(d.start).toISOString()],
  state: 'present'
})))

if (!args.debug) {
  const sql_students = pgp.helpers.insert(students, ['id', 'name', 'organisation_id'], 'student') + ' ON CONFLICT DO NOTHING';
  const sql_lessons = pgp.helpers.insert(lessons, ['id', 'start_time', 'name', 'organisation_id'], 'lesson') + ' ON CONFLICT DO NOTHING';
  const sql_attendance = pgp.helpers.insert(attendance, ['student_id', 'lesson_id', 'state'], 'student_attendance') + ' ON CONFLICT DO NOTHING';

  const sql_all = pgp.helpers.concat([sql_students, sql_lessons, sql_attendance]);

  console.log(sql_all)
} else if (args.debug === 'student') {
  console.log(JSON.stringify(students.map(s=> s.name).sort(), null, 2));
  console.log(JSON.stringify(studentsIds, null, 2));
}