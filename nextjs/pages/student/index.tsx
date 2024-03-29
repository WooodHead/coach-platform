import Link from "next/link";
import React, { FC } from "react";
import { Layout } from "../../src/components/layout";
import { useGetStudentsQuery } from "../../src/generated-graphql";
import { getAge } from "../../src/lib/time-fmt";

function StudentsPage() {
  const [result] = useGetStudentsQuery();

  if (!result.data) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <div>
        <h1>Students</h1>
        <Link href="/student/new">
          <a className="button">New Student</a>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {result.data.student.map((s) => (
              <tr key={s.id}>
                <td>
                  <Link href={`/student/${s.id}`}>
                    <a>{s.name}</a>
                  </Link>
                </td>
                <td>{s.birthday && getAge(new Date(s.birthday))}</td>
                <td>
                  {s.birthday && new Date(s.birthday).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default StudentsPage as FC<void>;
