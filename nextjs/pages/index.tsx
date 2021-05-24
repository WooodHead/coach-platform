import {
  format,
  getDay,
  endOfWeek,
  startOfWeek,
  setDay,
  addWeeks,
  getWeek,
  startOfDay,
} from "date-fns";
import { endOfDay } from "date-fns";
import { map } from "lodash";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { Calendar } from "../src/components/calendar";
import { Layout } from "../src/components/layout";
import { Modal } from "../src/components/modal";

function Home() {
  return (
    <Layout>
      <>
        <div className="box">
          <h2>Today</h2>
          <Today />
        </div>
        <div className="box">
          <h2>Time Table</h2>
          <TimeTable />
        </div>
      </>
    </Layout>
  );
}

export default Home;

function Today() {
  const [result] = useQuery({
    query: gql`
      query MyMutation($start: timestamptz!, $end: timestamptz!) {
        lesson(
          where: { start_time: { _gte: $start, _lte: $end } }
          order_by: { start_time: asc }
        ) {
          id
          name
          start_time
        }
      }
    `,
    variables: {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
    },
  });
  if (!result.data) {
    return <div>loading</div>;
  }
  return (
    <ul>
      {result.data.lesson.map((l) => (
        <li key={l.id}>{l.name}</li>
      ))}
    </ul>
  );
}

function TimeTable() {
  const [offset, setOffset] = useState(0);
  const week = addWeeks(new Date(), offset);

  const [openTemplate, setOpenTemplate] = useState(null);
  const [result] = useQuery({
    query: gql`
      query MyQuery($weekStart: timestamptz!, $weekEnd: timestamptz!) {
        lesson_template(
          where: {
            _not: {
              lessons: { start_time: { _gte: $weekStart, _lte: $weekEnd } }
            }
          }
        ) {
          id
          day
          duration
          name
          time: start_time
          template_students(order_by: { student: { name: asc } }) {
            id
            student {
              id
              name
            }
          }
        }
        lesson(where: { start_time: { _gte: $weekStart, _lte: $weekEnd } }) {
          id
          name
          start_time
          duration
          template_id
        }
      }
    `,
    variables: {
      weekStart: startOfWeek(week, { weekStartsOn: 1 }).toISOString(),
      weekEnd: endOfWeek(week, { weekStartsOn: 1 }).toISOString(),
    },
  });

  const [, createLesson] = useMutation(gql`
    mutation MyMutation(
      $template_id: uuid!
      $start_time: timestamptz!
      $name: String!
      $duration: interval!
      $student_attendances: student_attendance_arr_rel_insert_input!
    ) {
      insert_lesson_one(
        object: {
          duration: $duration
          name: $name
          start_time: $start_time
          template_id: $template_id
          student_attendances: $student_attendances
        }
      ) {
        id
      }
    }
  `);

  const templates =
    result.data?.lesson_template?.map((t) => ({ ...t, type: "template" })) ??
    [];

  const templateIds = new Set(map(templates, "id"));

  const lessons =
    result?.data?.lesson
      ?.map?.((l) => ({
        ...l,
        day: getDay(new Date(l.start_time)),
        time: format(new Date(l.start_time), "HH:mm:00"),
        type: "lesson",
      }))
      ?.filter((l) => !(l.template_id in templateIds)) ?? [];

  const router = useRouter();
  function clickEvent(e) {
    if (e.type === "lesson") {
      router.push(`/lesson/${e.id}`);
    } else {
      setOpenTemplate(e);
    }
  }

  async function onCreateLesson(e) {
    const d = setDay(week, openTemplate.day, {
      weekStartsOn: 1,
    });
    const t = e.time.split(":");
    const start_time = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      t[0],
      t[1],
      0
    );
    const result = await createLesson({
      template_id: e.id,
      start_time,
      name: e.name,
      duration: e.duration,
      student_attendances: {
        data: e.template_students.map((ts) => ({
          student_id: ts.student.id,
          state: "absent",
        })),
      },
    });
    if (result.data) {
      router.push(`/lesson/${result.data.insert_lesson_one.id}`);
    }
  }

  return (
    <div>
      <div className="date-strip">
        <button onClick={() => setOffset(offset - 1)}>Last Week</button>
        <span>Week {getWeek(week, { weekStartsOn: 1 })}</span>
        <span>
          {startOfWeek(week, { weekStartsOn: 1 }).toLocaleDateString()}
        </span>
        -
        <span>{endOfWeek(week, { weekStartsOn: 1 }).toLocaleDateString()}</span>
        <button onClick={() => setOffset(offset + 1)}>Next Week</button>
      </div>
      <Calendar
        events={[...templates, ...lessons]}
        onClick={clickEvent}
        typeMap={{
          lesson: "var(--color-green-2)",
          template: "var(--color-red-2)",
        }}
      />
      {openTemplate && (
        <Modal onClose={() => setOpenTemplate(null)}>
          <h2>Create Lesson</h2>
          <div>
            <ul>
              <li>
                day:
                {setDay(week, openTemplate.day, {
                  weekStartsOn: 1,
                }).toLocaleDateString()}
              </li>
              <li>name: {openTemplate.name}</li>
              <li>time: {openTemplate.time}</li>
              <li>duration: {openTemplate.duration}</li>
              <li>
                Students:
                <ul>
                  {openTemplate.template_students.map((ts) => (
                    <li key={ts.id}>{ts.student.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <button onClick={() => onCreateLesson(openTemplate)}>Create</button>
          </div>
        </Modal>
      )}
      <style jsx>{`
        .date-strip {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
