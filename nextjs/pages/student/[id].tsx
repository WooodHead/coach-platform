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
            limit: 365
          ) {
            id
            lesson {
              name
              start_time
              id
            }
            state
          }
          student_attendances_aggregate {
            aggregate {
              count
            }
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
      <div>
        Total Trainings {student.student_attendances_aggregate.aggregate.count}
      </div>
      <div>Birthday: {new Date(student.birthday).toLocaleDateString()}</div>
      <h2>Last Attendances</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {student.student_attendances.map((at) => (
            <tr key={at.id}>
              <td>{new Date(at.lesson.start_time).toLocaleString()}</td>
              <td> {at.lesson.name}</td>
              <td> {at.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LessonPage as FC<void>;
