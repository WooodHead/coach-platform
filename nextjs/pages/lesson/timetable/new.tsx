import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { Layout } from "../../../src/components/layout";
import { DAYS } from "../../../src/days";
import { useAddTimeTableEntriesMutation, useGetGroupNamesQuery } from "../../../src/generated-graphql";

function NewLessonPage() {
  const router = useRouter();
  const [, insertTimeTable] = useAddTimeTableEntriesMutation();
  const [groups] = useGetGroupNamesQuery();

  const formik = useFormik({
    initialValues: {
      day: "",
      time: "14:00",
      duration: "01:00",
      group: ""
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await insertTimeTable({
        day: Number(values.day),
        start_time: values.time,
        duration: values.duration + ":00",
        group_id: values.group
      });
      if (res?.data) {
        router.push(
          `/lesson/`
        );
      }
    },
  });

  return (
    <Layout>
      <div>
        <h1>New Template</h1>
        <form onSubmit={formik.handleSubmit}>
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
          <select
            name="group"
            onChange={formik.handleChange}
            value={formik.values.group}
          >
            <option value=""></option>
            {groups?.data?.group.map?.((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
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
    </Layout>
  );
}

export default NewLessonPage as FC<void>;
