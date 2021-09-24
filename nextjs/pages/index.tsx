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
import { Calendar, CalendarEvent } from "../src/components/calendar";
import { Layout } from "../src/components/layout";
import { Modal } from "../src/components/modal";

import {
  useLessonsTodayQuery,
  useAllLessonsInWeekQuery,
  useCreateLessonMutation,
} from "../src/generated-graphql";

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
  const [result] = useLessonsTodayQuery({
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
  type TimetableElement = typeof timetableLessons[0] & typeof lessons[0];
  
  const [offset, setOffset] = useState(0);
  const week = addWeeks(new Date(), offset);

  const [result] = useAllLessonsInWeekQuery({
    variables: {
      weekStart: startOfWeek(week, { weekStartsOn: 1 }).toISOString(),
      weekEnd: endOfWeek(week, { weekStartsOn: 1 }).toISOString(),
    },
  });
  
  const [, createLesson] = useCreateLessonMutation();
  
  const timetableLessons =
  result.data?.timetable?.map((t) => ({ ...t, type: "timetable", name: t.group.name })) ??
  [];
  
  const [openTimeTable, setOpenTimeTable] = useState<TimetableElement>(null);
  const timetableIds: Set<string> = new Set(map(timetableLessons, "id"));

  const lessons =
    result?.data?.lesson
      ?.map?.((l) => ({
        ...l,
        day: getDay(new Date(l.start_time)),
        time: format(new Date(l.start_time), "HH:mm:00"),
        type: "lesson",
      }))
      ?.filter((l) => !(l.timetable_id in timetableIds)) ?? [];

  const router = useRouter();


  function clickEvent(e: TimetableElement) {
    if (e.type === "lesson") {
      router.push(`/lesson/${e.id}`);
    } else {
      setOpenTimeTable(e);
    }
  }

  async function onCreateLesson(e: TimetableElement) {
    const d = setDay(week, openTimeTable.day, {
      weekStartsOn: 1,
    });
    const t = e.start_time.split(":");
    const start_time = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      Number(t[0]),
      Number(t[1]),
      0
    );

    const result = await createLesson({
      timetable_id: e.id,
      start_time,
      name: e.name,
      duration: e.duration,
      student_attendances: {
        data: e.group?.students.map((ts) => ({
          student_id: ts.id,
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
        <span>Week {getWeek(week, { firstWeekContainsDate: 4 ,weekStartsOn: 1 })}</span>
        <span>
          {startOfWeek(week, { weekStartsOn: 1 }).toLocaleDateString()}
        </span>
        -
        <span>{endOfWeek(week, { weekStartsOn: 1 }).toLocaleDateString()}</span>
        <button onClick={() => setOffset(offset + 1)}>Next Week</button>
      </div>
      <Calendar
        events={[...timetableLessons, ...lessons]}
        onClick={clickEvent}
        typeMap={{
          lesson: "var(--color-green-2)",
          timetable: "var(--color-red-2)",
        }}
      />
      {openTimeTable && (
        <Modal onClose={() => setOpenTimeTable(null)}>
          <h2>Create Lesson</h2>
          <div>
            <ul>
              <li>
                day:
                {setDay(week, openTimeTable.day, {
                  weekStartsOn: 1,
                }).toLocaleDateString()}
              </li>
              <li>name: {openTimeTable.name}</li>
              <li>time: {openTimeTable.start_time}</li>
              <li>duration: {openTimeTable.duration}</li>
              <li>
                Students:
                <ul>
                  {openTimeTable.group.students.map((ts) => (
                    <li key={ts.id}>{ts.id}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <button onClick={() => onCreateLesson(openTimeTable)}>Create</button>
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
