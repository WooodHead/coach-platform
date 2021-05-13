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
        student_by_pk(id: $id) {
          id
          name
          birthday
          student_attendances(
            order_by: { lesson: { start_time: desc } }
            limit: 20
          ) {
            id
            lesson {
              name
              start_time
              id
            }
            state
          }
        }
      }
    `,
    variables: { id },
  });

  const student = result.data?.student_by_pk;

  if (!student) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <span>Birthday: {new Date(student.birthday).toLocaleDateString()}</span>
      <h2>Last Attendances</h2>
      <ul>
        {student.student_attendances.map((at) => (
          <li key={at.id}>
            {new Date(at.lesson.start_time).toLocaleString()} {at.lesson.name} -{" "}
            {at.state}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LessonPage as FC<void>;
