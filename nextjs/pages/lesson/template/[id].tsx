import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import {
  EditableSelect,
  EditableString,
  EditableTime,
} from "../../../src/components/editable";
import { Layout } from "../../../src/components/layout";
import { StudentSearch } from "../../../src/components/student-search";
import { DAYS } from "../../../src/days";
import {
  useAddLessonTemplateStudentMutation,
  useGetLessonTemplateByIdQuery,
  useRemoveLessonTemplateStudentMutation,
  useUpdateLessonTemplateDayMutation,
  useUpdateLessonTemplateDurationMutation,
  useUpdateLessonTemplateNameMutation,
  useUpdateLessonTemplateTimeMutation,
} from "../../../src/generated-graphql";
import { durationString } from "../../../src/lib/time-fmt";

function LessonTemplatePage() {
  const router = useRouter();
  const { id } = router.query;

  const [result, reloadLesson] = useGetLessonTemplateByIdQuery({
    variables: { id },
  });

  const [, setName] = useUpdateLessonTemplateNameMutation();
  const [, setDay] = useUpdateLessonTemplateDayMutation();
  const [, setTime] = useUpdateLessonTemplateTimeMutation();
  const [, setDuration] = useUpdateLessonTemplateDurationMutation();
  const [, addStudent] = useAddLessonTemplateStudentMutation();
  const [, removeStudent] = useRemoveLessonTemplateStudentMutation();

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
