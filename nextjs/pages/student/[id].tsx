import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { Layout } from "../../src/components/layout";
import { EditableDate, EditableString } from "../../src/components/editable";
import { getAge } from "../../src/lib/time-fmt";
import {
  useGetStudentByIdQuery,
  useSetStudentBirthdayMutation,
  useSetStudentNameMutation,
} from "../../src/generated-graphql";

function LessonPage() {
  const router = useRouter();
  const { id } = router.query;

  const [result] = useGetStudentByIdQuery({
    variables: { id },
  });

  const [, setName] = useSetStudentNameMutation();
  const [, setBirthday] = useSetStudentBirthdayMutation();

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
                  getAge(new Date(student.birthday)) +
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
