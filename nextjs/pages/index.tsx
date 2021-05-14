import { format, getDay, endOfWeek, startOfWeek, setDay } from "date-fns";
import { map } from "lodash";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { Calendar } from "../src/components/calendar";
import { Modal } from "../src/components/modal";

function Home() {
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
      weekStart: startOfWeek(new Date(), { weekStartsOn: 1 }).toISOString(),
      weekEnd: endOfWeek(new Date(), { weekStartsOn: 1 }).toISOString(),
    },
  });

  const [, createLesson] = useMutation(gql`
    mutation MyMutation(
      $template_id: uuid!
      $start_time: timestamptz!
      $name: String!
      $duration: interval!
    ) {
      insert_lesson_one(
        object: {
          duration: $duration
          name: $name
          start_time: $start_time
          template_id: $template_id
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
    const d = setDay(new Date(), openTemplate.day, {
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
    });
    if (result.data) {
      router.push(`/lesson/${result.data.insert_lesson_one.id}`);
    }
  }

  return (
    <div>
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
                {setDay(new Date(), openTemplate.day, {
                  weekStartsOn: 1,
                }).toLocaleString()}
              </li>
              <li>name: {openTemplate.name}</li>
              <li>time: {openTemplate.time}</li>
              <li>duration: {openTemplate.duration}</li>
              <li>Students: TODO</li>
            </ul>
            <button onClick={() => onCreateLesson(openTemplate)}>Create</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Home;
