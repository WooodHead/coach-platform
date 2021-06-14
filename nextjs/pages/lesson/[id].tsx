import Link from "next/link";
import { add } from "date-fns";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { AttendanceButton } from "../../src/components/attendance-buttons";
import { Layout } from "../../src/components/layout";
import {
  EditableDateTime,
  EditableString,
  EditableTime,
} from "../../src/components/editable";
import { StudentSearch } from "../../src/components/student-search";
import {
  useGetLessonByIdQuery,
  useSetLessonDateMutation,
  useSetLessonDurationMutation,
  useSetLessonNameMutation,
} from "../../src/generated-graphql";

function LessonPage() {
  const router = useRouter();
  const { id } = router.query;

  const [result, reloadLesson] = useGetLessonByIdQuery({
    variables: { id },
  });

  const [, setName] = useSetLessonNameMutation();
  const [, setDate] = useSetLessonDateMutation();
  const [, setDuration] = useSetLessonDurationMutation();

  const lesson = result.data?.lesson_by_pk;

  if (!lesson) {
    return <div>Loading</div>;
  }

  const start = new Date(lesson?.start_time);
  const [, hours, minutes] = /(\d+):(\d+)/
    .exec(lesson?.duration)
    .map((n) => Number(n));
  const end = add(start, { hours, minutes });

  console.log(`${start} + ${lesson?.duration} = ${end}`);

  return (
    <Layout>
      <div>
        <h1>
          <EditableString
            label="Name"
            value={lesson.name}
            onChange={(name) => setName({ id: lesson.id, name })}
          >
            {lesson.name}
          </EditableString>
        </h1>
        <EditableDateTime
          label="Start time"
          value={start}
          onChange={(date) =>
            setDate({ id: lesson.id, date: date.toISOString() })
          }
        >
          {start.toLocaleString().substr(0, start.toLocaleString().length - 3)}
        </EditableDateTime>
        -
        <EditableTime
          label="Duration"
          value={lesson.duration}
          onChange={(duration) => setDuration({ id: lesson.id, duration })}
        >
          {end
            .toLocaleTimeString()
            .substr(0, end.toLocaleTimeString().length - 3)}
        </EditableTime>
        <div>{lesson.plan}</div>
        <StudentSearch>
          <AttendanceButton
            lesson_id={lesson.id}
            student_id=""
            reload={() => {
              reloadLesson({ requestPolicy: "network-only" });
            }}
          />
        </StudentSearch>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birthday</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {lesson.student_attendances.map((sa) => (
              <tr key={sa.id}>
                <td>
                  <Link href={`/student/${sa.student.id}`}>
                    <a>{sa.student.name}</a>
                  </Link>
                </td>
                <td>
                  {sa.student.birthday &&
                    new Date(sa.student.birthday).toLocaleDateString()}
                </td>
                <td>
                  <AttendanceButton
                    attendance_id={sa.id}
                    state={sa.state}
                    reload={reloadLesson}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{``}</style>
      </div>
    </Layout>
  );
}

export default LessonPage as FC<void>;
