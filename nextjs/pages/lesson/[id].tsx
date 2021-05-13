import Link from "next/link";
import { add } from "date-fns";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { gql, useQuery } from "urql";

function LessonPage() {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useQuery({
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
