import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { gql, useMutation, useQuery } from "urql";
import {
  EditableSelect,
  EditableString,
  EditableTime,
} from "../../../src/components/editable";
import { Layout } from "../../../src/components/layout";
import { StudentSearch } from "../../../src/components/student-search";
import { DAYS } from "../../../src/days";
import { durationString } from "../../../src/lib/time-fmt";

function LessonTemplatePage() {
  const router = useRouter();
  const { id } = router.query;

  const [result, reloadLesson] = useQuery({
    query: gql`
      query MyQuery($id: uuid!) {
        lesson_template_by_pk(id: $id) {
          id
          name
          duration
          start_time
          day
          template_students {
            id
            student {
              id
              name
            }
          }
        }
      }
    `,
    variables: { id },
  });

  const [, setName] = useMutation(gql`
    mutation MyMutation($id: uuid!, $name: String!) {
      update_lesson_template_by_pk(
        pk_columns: { id: $id }
        _set: { name: $name }
      ) {
        name
        id
      }
    }
  `);

  const [, setDay] = useMutation(gql`
    mutation MyMutation($id: uuid!, $day: Int!) {
      update_lesson_template_by_pk(
        pk_columns: { id: $id }
        _set: { day: $day }
      ) {
        name
        id
      }
    }
  `);
  const [, setTime] = useMutation(gql`
    mutation MyMutation($id: uuid!, $time: time!) {
      update_lesson_template_by_pk(
        pk_columns: { id: $id }
        _set: { start_time: $time }
      ) {
        name
        id
      }
    }
  `);
  const [, setDuration] = useMutation(gql`
    mutation MyMutation($id: uuid!, $duration: interval!) {
      update_lesson_template_by_pk(
        pk_columns: { id: $id }
        _set: { duration: $duration }
      ) {
        name
        id
      }
    }
  `);

  const [, addStudent] = useMutation(gql`
    mutation MyMutation($template_id: uuid!, $student_id: uuid!) {
      insert_lesson_template_student_one(
        object: { lesson_template_id: $template_id, student_id: $student_id }
      ) {
        id
        lesson_template_id
        student_id
      }
    }
  `);
  const [, removeStudent] = useMutation(gql`
    mutation MyMutation($id: uuid!) {
      delete_lesson_template_student_by_pk(id: $id) {
        id
        student_id
        lesson_template_id
      }
    }
  `);
  const lessont = result.data?.lesson_template_by_pk;

  if (!lessont) {
    return <div>Loading</div>;
  }
  const [, start, end] = durationString(lessont.start_time, lessont.duration);

  return (
    <Layout>
      <div>
        <h1>
          <EditableString
            value={lessont.name}
            label="Template Name"
            onChange={(name) => setName({ id, name })}
          >
            {lessont.name}
          </EditableString>
        </h1>
        <EditableSelect
          label="Day"
          value={`${lessont.day}`}
          options={DAYS.reduce((p, c, i) => ({ ...p, [i]: c }), {})}
          onChange={(day) => setDay({ id, day: Number(day) })}
        >
          {DAYS[lessont.day]}
        </EditableSelect>{" "}
        <EditableTime
          value={lessont.start_time}
          label="Start Time"
          onChange={(time) => setTime({ id, time })}
        >
          {start}
        </EditableTime>
        {" - "}
        <EditableTime
          value={lessont.duration}
          label="Duration"
          onChange={(duration) => setDuration({ id, duration })}
        >
          {end}
        </EditableTime>
        <StudentSearch>
          <AddButton
            onClick={(student_id) => {
              addStudent({ template_id: id, student_id });
              reloadLesson({ requestPolicy: "network-only" });
            }}
            student_id=""
          />
        </StudentSearch>
        <ul>
          {lessont.template_students.map((ts) => (
            <li key={ts.id}>
              {ts.student.name}{" "}
              <button onClick={() => removeStudent({ id: ts.id })}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default LessonTemplatePage as FC;

function AddButton({
  student_id,
  onClick,
}: {
  student_id: string;
  onClick: (string) => void;
}) {
  return <button onClick={() => onClick(student_id)}>Add</button>;
}
