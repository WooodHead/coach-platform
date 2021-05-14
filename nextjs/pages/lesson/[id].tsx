import Link from "next/link";
import { add } from "date-fns";
import { useRouter } from "next/dist/client/router";
import React, { FC, useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { AttendanceButton } from "../../src/components/attendance-buttons";

function LessonPage() {
  const router = useRouter();
  const { id } = router.query;

  const [result, reloadLesson] = useQuery({
    query: gql`
      query MyQuery($id: uuid!) {
        lesson_by_pk(id: $id) {
          id
          name
          duration
          plan
          start_time
          student_attendances(order_by: { student: { name: asc } }) {
            id
            state
            student {
              id
              name
              birthday
            }
          }
        }
      }
    `,
    variables: { id },
  });

  const lesson = result.data?.lesson_by_pk;

  if (!lesson) {
    return <div>Loading</div>;
  }

  const start = new Date(lesson?.start_time);
  const [, hours, minutes, seconds] = /(\d)+:(\d)+:(\d)+/
    .exec(lesson?.duration)
    .map((n) => Number(n));
  const end = add(start, { hours, minutes, seconds });
  return (
    <div>
      <h1>{lesson.name}</h1>
      {start.toLocaleString()} - {end.toLocaleTimeString()}
      <div>{lesson.plan}</div>
      <AddStudent lessonId={lesson.id} reload={reloadLesson} />
      <table>
        <thead>
          <th>Name</th>
          <th>Birthday</th>
          <th>Attendance</th>
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
  );
}

export default LessonPage as FC<void>;

const AddStudent: FC<{ lessonId: string; reload: () => void }> = ({
  lessonId,
  reload,
}) => {
  const [searchText, setSearchText] = useState("");

  const [result] = useQuery({
    query: gql`
      query MyQuery($name: String = "") {
        student(where: { name: { _ilike: $name } }, limit: 5) {
          id
          name
          birthday
        }
      }
    `,
    pause: searchText === "",
    variables: { name: `%${searchText}%` },
  });

  const [, addStudent] = useMutation(gql`
    mutation MyMutation($lesson: uuid!, $student: uuid!) {
      insert_student_attendance_one(
        object: { lesson_id: $lesson, student_id: $student, state: present }
        on_conflict: { constraint: student_attendance_student_id_lesson_id_key }
      ) {
        id
        lesson_id
        state
        student_id
      }
    }
  `);

  return (
    <div className="add-student">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Student"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button title="clear" onClick={() => setSearchText("")}>
          X
        </button>
      </div>
      {result.data && searchText !== "" && (
        <ul className="result-list">
          {result.data.student.map((s) => (
            <li key={s.id}>
              {s.name}
              {s.birthday && ` (${new Date(s.birthday).toLocaleDateString()})`}
              <AttendanceButton
                student_id={s.id}
                lesson_id={lessonId}
                reload={() => {
                  setSearchText("");
                  reload();
                }}
              />
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .add-student {
          margin-top: 1rem;
          margin-bottom: 1rem;
          max-width: 500px;
          position: relative;
        }
        .search-box {
          position: relative;
        }
        .search-box input {
          width: 100%;
        }
        .search-box button {
          position: absolute;
          top: 0px;
          right: 0px;
          margin-right: 0px;
        }
        .result-list {
          list-style: none;
          padding-left: 0px;
          position: absolute;
          background-color: white;
          width: 100%;
          padding: 1rem;
          border-radius: var(--box-border-radius);
          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
            0 0 0 1px rgba(10, 10, 10, 0.02);
        }
        .result-list li {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};
