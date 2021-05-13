import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { gql, useMutation, useQuery } from "urql";

function StudentsPage() {
  const [result] = useQuery({
    query: gql`
      query MyQuery {
        student {
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
    <div>
      <h1>Students</h1>
      <NewStudent />
      {result.data.student.map((s) => (
        <div key={s.id}>
          {s.name} {s.birthday && ` (${s.birthday})`}
        </div>
      ))}
      <pre>{JSON.stringify(result?.data, null, 2)}</pre>
    </div>
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
