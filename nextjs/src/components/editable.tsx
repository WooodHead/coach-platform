import { FC, useState } from "react";

export const Editable: FC<{
  type?: "string" | "date";
  value: string;
  onChange: (string) => void;
}> = ({ children, value, type = "string", onChange }) => {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState(value);

  return (
    <span className={`editable ${edit ? "active" : ""}`}>
      <span>{children}</span>
      <button onClick={() => setEdit(true)} className="edit-btn">
        ✏️
      </button>
      {edit && (
        <div className="edit">
          {type === "string" && (
            <input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              type="text"
            />
          )}
          {type === "date" && (
            <input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              type="date"
            />
          )}
          <button
            onClick={() => {
              onChange(val);
              setEdit(false);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setEdit(false);
              setVal(value);
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <style jsx>{`
        .editable {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          position: relative;
        }
        .editable .edit-btn {
          visibility: hidden;
          border-radius: 50%;
          padding: 0px;
          margin: 0px;
        }
        .editable:hover .edit-btn {
          visibility: visible;
        }
        .editable.active:hover .edit-btn {
          visibility: hidden;
        }
        .edit {
          display: flex;
          z-index: 1;
          gap: 1rem;
          background-color: var(--color-background);
          padding: 0.5rem;
          position: absolute;
          top: calc(100% + 0.5rem);
          border: 1px solid black;
          border-radius: var(--box-border-radius);
        }
      `}</style>
    </span>
  );
};
