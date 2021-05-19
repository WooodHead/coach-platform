import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { gql, useMutation } from "urql";
import { DAYS } from "../../../src/days";

function NewLessonPage() {
  const router = useRouter();
  const [, insertTemplate] = useMutation(gql`
    mutation MyMutation(
      $name: String!
      $time: time!
      $duration: interval!
      $day: Int!
    ) {
      insert_lesson_template_one(
        object: {
          name: $name
          start_time: $time
          duration: $duration
          day: $day
        }
      ) {
        id
      }
    }
  `);

  const formik = useFormik({
    initialValues: {
      name: "",
      day: "",
      time: "14:00",
      duration: "01:00",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await insertTemplate({
        name: values.name,
        day: Number(values.day),
        time: values.time,
        duration: values.duration + ":00",
      });
      if (res?.data) {
        router.push(`/`);
      }
    },
  });

  return (
    <div>
      <h1>New Template</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <select
          name="day"
          onChange={formik.handleChange}
          value={formik.values.day}
        >
          <option value=""></option>
          {DAYS.map((d, i) => (
            <option key={d} value={i}>
              {d}
            </option>
          ))}
        </select>
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
  );
}

export default NewLessonPage as FC<void>;
