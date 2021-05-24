import { differenceInCalendarYears, differenceInYears } from "date-fns";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { gql, useMutation, useQuery } from "urql";
import { Layout } from "../../src/components/layout";
import { EditableDate, EditableString } from "../../src/components/editable";

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

  const [, setName] = useMutation(gql`
    mutation($id: uuid!, $name: String!) {
      update_student_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
        id
        name
      }
    }
  `);

  const [, setBirthday] = useMutation(gql`
    mutation($id: uuid!, $birthday: date!) {
      update_student_by_pk(
        pk_columns: { id: $id }
        _set: { birthday: $birthday }
      ) {
        id
        birthday
      }
    }
  `);

  const student = result.data?.student_by_pk;

  if (!student) {
    return (
      <Layout>
        <>Loading</>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <h1>
          <EditableString
            label="Name"
            value={student.name}
            onChange={(name) => setName({ id: student.id, name })}
          >
            {student.name}
          </EditableString>
        </h1>
        <ul>
          <li>
            <strong>Total Trainings </strong>
            {student.student_attendances_aggregate.aggregate.count}
          </li>
          <li>
            <EditableDate
              label="Birthday"
              value={new Date(student.birthday)}
              onChange={(bd) => setBirthday({ id: student.id, birthday: bd })}
            >
              <strong>Birthday: </strong>
              {student.birthday &&
                new Date(student.birthday).toLocaleDateString() +
                  " (" +
                  differenceInYears(new Date(), new Date(student.birthday)) +
                  ")"}
            </EditableDate>
          </li>
        </ul>
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
      </>
    </Layout>
  );
}

export default LessonPage as FC<void>;
