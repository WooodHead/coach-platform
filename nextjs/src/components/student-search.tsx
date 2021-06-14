import React, { FC, ReactElement, useState } from "react";
import { useSearchStudentQuery } from "../generated-graphql";

export const StudentSearch: FC = ({
  children,
}: {
  children: ReactElement<{ student_id: string }>;
}) => {
  const [searchText, setSearchText] = useState("");

  const [result] = useSearchStudentQuery({
    pause: searchText === "",
    variables: { name: `%${searchText}%` },
  });

  return (
    <div className="add-student">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Student"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button title="clear" onClick={() => setSearchText("")}>
          X
        </button>
      </div>
      {result.data && searchText !== "" && (
        <ul className="result-list">
          {result.data.student.map((s) => (
            <li key={s.id}>
              {s.name}
              {s.birthday && ` (${new Date(s.birthday).toLocaleDateString()})`}
              {React.isValidElement(children) &&
                React.cloneElement(children, { student_id: s.id })}
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .add-student {
          margin-top: 1rem;
          margin-bottom: 1rem;
          max-width: 500px;
          position: relative;
        }
        .search-box {
          position: relative;
        }
        .search-box input {
          width: 100%;
        }
        .search-box button {
          position: absolute;
          top: 0px;
          right: 0px;
          margin-right: 0px;
        }
        .result-list {
          list-style: none;
          padding-left: 0px;
          position: absolute;
          background-color: white;
          width: 100%;
          padding: 1rem;
          border-radius: var(--box-border-radius);
          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
            0 0 0 1px rgba(10, 10, 10, 0.02);
        }
        .result-list li {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};
