import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { gql, useMutation } from "urql";
import { Layout } from "../../src/components/layout";

function NewLessonPage() {
  const router = useRouter();
  const [, insertLesson] = useMutation(gql`
    mutation AddLesson(
      $name: String!
      $start_time: timestamptz!
      $duration: interval!
    ) {
      insert_lesson_one(
        object: { name: $name, start_time: $start_time, duration: $duration }
      ) {
        id
      }
    }
  `);

  const formik = useFormik({
    initialValues: {
      name: "Training",
      date: new Date().toISOString().substr(0, 10),
      time: "14:00",
      duration: "01:00",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await insertLesson({
        name: values.name,
        start_time: new Date(values.date + "T" + values.time),
        duration: values.duration + ":00",
      });
      if (res?.data) {
        router.push(`/lesson/${res.data.insert_lesson_one.id}`);
      }
    },
  });

  return (
    <Layout>
      <div>
        <h1>New Lesson</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            type="date"
            name="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          <input
            type="time"
            name="time"
            onChange={formik.handleChange}
            value={formik.values.time}
          />
          <input
            type="time"
            name="duration"
            onChange={formik.handleChange}
            value={formik.values.duration}
          />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  );
}

export default NewLessonPage as FC<void>;
