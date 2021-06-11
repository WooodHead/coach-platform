import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import { gql, useMutation } from "urql";
import { Layout } from "../../src/components/layout";

function NewStudent() {
  const router = useRouter();
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
      router.push(`/student/${res.data.insert_student_one.id}`);
    },
  });
  return (
    <Layout>
      <div>
        <h1>New Student</h1>
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
    </Layout>
  );
}

export default NewStudent;
