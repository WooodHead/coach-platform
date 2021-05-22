import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { FC } from "react";
import { gql, useMutation, useQuery } from "urql";
import { Layout } from "../../src/components/layout";

function StudentsPage() {
  const [result] = useQuery({
    query: gql`
      query MyQuery {
        student(order_by: { name: asc }) {
          id
          name
          birthday
        }
      }
    `,
  });

  if (!result.data) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <div>
        <h1>Students</h1>
        <NewStudent />
        {result.data.student.map((s) => (
          <div key={s.id}>
            <Link href={`/student/${s.id}`}>
              <a>{s.name}</a>
            </Link>
            {s.birthday && ` (${s.birthday})`}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default StudentsPage as FC<void>;

function NewStudent() {
  const [, addUser] = useMutation(gql`
    mutation MyMutation($birthday: date, $name: String!) {
      insert_student_one(object: { birthday: $birthday, name: $name }) {
        id
        name
        birthday
      }
    }
  `);

  const formik = useFormik({
    initialValues: { name: "", birthday: "" },
    async onSubmit(values) {
      const res = await addUser({
        name: values.name,
        birthday: values.birthday === "" ? null : values.birthday,
      });
      console.log(res);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="string"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input
          type="date"
          name="birthday"
          value={formik.values.birthday}
          onChange={formik.handleChange}
        />
        <input type="submit" value="Add New User" />
      </form>
    </div>
  );
}
