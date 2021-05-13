import Link from "next/link";
import { add } from "date-fns";
import { useRouter } from "next/dist/client/router";
import React, { FC, useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { useFormik } from "formik";

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
          student_attendances {
            id
            state
            student {
              id
              name
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
      <ul>
        {lesson.student_attendances.map((sa) => (
          <li key={sa.id}>
            <Link href={`/student/${sa.student.id}`}>
              <a>{sa.student.name}</a>
            </Link>{" "}
            ({sa.state})
          </li>
        ))}
      </ul>
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
    <div>
      <input
        type="text"
        placeholder="Search Student"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {result.data &&
        result.data.student.map((s) => (
          <li key={s.id}>
            {s.name}
            {s.birthday && ` (${new Date(s.birthday).toLocaleDateString()})`}
            <button
              onClick={async () => {
                await addStudent({ student: s.id, lesson: lessonId });
                reload();
              }}
            >
              Add
            </button>
          </li>
        ))}
    </div>
  );
};
