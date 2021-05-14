import { FC } from "react";
import { gql, useMutation } from "urql";
//import "../styles.css";

type ExistingProp = { attendance_id: string; state: string };
type NewProp = { lesson_id: string; student_id: string };

export const AttendanceButton: FC<
  (ExistingProp | NewProp) & { reload: () => void }
> = (props) => {
  const [, setAttendanceState] = useMutation(gql`
    mutation MyMutation($id: uuid!, $state: attendance_state_enum!) {
      update_student_attendance_by_pk(
        pk_columns: { id: $id }
        _set: { state: $state }
      ) {
        id
        state
        student_id
      }
    }
  `);

  const [, addAttendance] = useMutation(gql`
    mutation MyMutation(
      $state: attendance_state_enum!
      $lesson_id: uuid!
      $student_id: uuid!
    ) {
      insert_student_attendance_one(
        object: {
          lesson_id: $lesson_id
          student_id: $student_id
          state: $state
        }
      ) {
        id
        lesson_id
        state
        student_id
      }
    }
  `);

  const [, removeAttendace] = useMutation(gql`
    mutation MyMutation($id: uuid!) {
      delete_student_attendance_by_pk(id: $id) {
        id
      }
    }
  `);

  const active = {
    present: !("state" in props) || props.state === "present" ? "active" : "",
    excused: !("state" in props) || props.state === "excused" ? "active" : "",
    absent: !("state" in props) || props.state === "absent" ? "active" : "",
  };

  async function setAttendance(state) {
    if ("state" in props) {
      if (state !== "absent") {
        await setAttendanceState({ state, id: props.attendance_id });
      } else {
        await removeAttendace({ id: props.attendance_id });
      }
    } else {
      const { lesson_id, student_id } = props;
      await addAttendance({ lesson_id, student_id, state });
    }
    props.reload();
  }

  return (
    <div className="presence">
      <button
        onClick={() => setAttendance("present")}
        className={`present ${active.present}`}
      >
        present
      </button>
      <button
        onClick={() => setAttendance("excused")}
        className={`excused ${active.excused}`}
      >
        excused
      </button>
      {"state" in props && (
        <button
          onClick={() => setAttendance("absent")}
          className={`absent ${active.absent}`}
        >
          absent
        </button>
      )}
      <style jsx>{`
        .present.active {
          background-color: var(--color-green-1);
        }
        .present:hover {
          background-color: var(--color-green-2);
        }
        .excused.active {
          background-color: var(--color-yellow-1);
        }
        .excused:hover {
          background-color: var(--color-yellow-2);
        }
        .absent.active {
          background-color: var(--color-red-1);
        }
        .absent:hover {
          background-color: var(--color-red-2);
        }
      `}</style>
    </div>
  );
};
