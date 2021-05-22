import { useFormik } from "formik";
import Link from "next/link";
import React, { FC } from "react";
import { gql, useMutation, useQuery } from "urql";

function StudentsPage() {
  const [result] = useQuery({
    query: gql`
      query MyQuery {
        lesson_template {
          id
          duration
          day
          name
          start_time
        }
      }
    `,
  });

  if (!result.data) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1>Lesson Templates</h1>
      <div>
        <Link href="/lesson/template/new">
          <a className="button">New Template</a>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Day</td>
            <td>Time</td>
            <td>Duration</td>
          </tr>
        </thead>
        <tbody>
          {result.data.lesson_template.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.day}</td>
              <td>{t.start_time}</td>
              <td>{t.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsPage as FC<void>;