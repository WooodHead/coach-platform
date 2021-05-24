import { format, set } from "date-fns";
import { isDate } from "lodash";
import React, { ReactElement, useState } from "react";

function EditableBase({
  children,
  innerChildren,
  label,
  save,
}: {
  label: string;
  children: React.ReactNode;
  innerChildren: React.ReactNode;
  save: () => void;
}): ReactElement {
  const [edit, setEdit] = useState(false);
  return (
    <span className={`editable ${edit ? "active" : ""}`}>
      <span>
        <span onClick={() => setEdit(true)}>
          <span>{innerChildren}</span>
          <button className="edit-btn">✏️</button>
        </span>
        {edit && (
          <div className="edit">
            <h3>{label}</h3>
            <div style={{ display: "flex" }}>
              {children}
              <button
                onClick={() => {
                  setEdit(false);
                  save();
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEdit(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </span>
      <style jsx>{`
        .editable {
          display: inline-block;
        }
        .editable span {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          position: relative;
        }
        .edit-btn {
          position: absolute;
          right: -22px;
          visibility: hidden;
          border-radius: 50%;
          padding: 0px;
          margin: 0px;
          width: 22px;
          heigh: 22px;
          z-index: 1;
        }
        .editable:hover .edit-btn {
          visibility: visible;
        }
        .editable.active:hover .edit-btn {
          visibility: hidden;
        }
        .edit {
          width: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
          gap: 5px;
          background-color: var(--color-background);
          padding: 0.5rem;
          position: absolute;
          top: calc(100% + 0.5rem);
          border: 1px solid black;
          border-radius: var(--box-border-radius);
        }
        .edit h3 {
          margin: 0px;
          font-size: 1rem;
        }
      `}</style>
    </span>
  );
}

type BaseElements = {
  label: string;
  children: React.ReactNode;
};

type EditString = {
  value: string;
  onChange: (val: string) => void;
};

export function EditableString({
  label,
  children,
  value,
  onChange,
}: BaseElements & EditString): ReactElement {
  const [str, setStr] = useState(isDate(value) ? null : value);

  return (
    <EditableBase
      label={label}
      save={() => onChange(str)}
      innerChildren={children}
    >
      <input value={str} onChange={(e) => setStr(e.target.value)} type="text" />
    </EditableBase>
  );
}

type EditDate = {
  value: Date;
  onChange: (val: Date) => void;
};

export function EditableDate({
  label,
  children,
  onChange,
  value,
}: BaseElements & EditDate): ReactElement {
  const [date, setDate] = useState(format(value, "yyyy-MM-dd"));
  return (
    <EditableBase
      label={label}
      save={() => onChange(new Date(date))}
      innerChildren={children}
    >
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
    </EditableBase>
  );
}

export function EditableDateTime({
  label,
  children,
  onChange,
  value,
}: BaseElements & EditDate): ReactElement {
  const [date, setDate] = useState(format(value, "yyyy-MM-dd"));
  const [time, setTime] = useState(format(value, "hh:mm"));
  function save() {
    const [hh, mm] = time.split(":");
    onChange(
      set(new Date(date), {
        hours: Number(hh),
        minutes: Number(mm),
        seconds: 0,
        milliseconds: 0,
      })
    );
  }

  return (
    <EditableBase label={label} save={save} innerChildren={children}>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
      <input
        value={time}
        onChange={(e) => setTime(e.target.value)}
        type="time"
      />
    </EditableBase>
  );
}

export function EditableTime({
  label,
  children,
  onChange,
  value,
}: BaseElements & EditString): ReactElement {
  const [_, hh, mm] = /(\d+):(\d+)/.exec(value);

  const [time, setTime] = useState(`${hh}:${mm}`);
  function save() {
    onChange(time);
  }

  return (
    <EditableBase label={label} save={save} innerChildren={children}>
      <input
        value={time}
        onChange={(e) => setTime(e.target.value)}
        type="time"
      />
    </EditableBase>
  );
}
