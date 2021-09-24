import Link from "next/link";
import React, { FC } from "react";
import { Layout } from "../../../src/components/layout";
import { useGetTimeTableEntriesQuery } from "../../../src/generated-graphql";

function StudentsPage() {
  const [result] = useGetTimeTableEntriesQuery();

  if (!result.data) {
    return <div>loading</div>;
  }

  return (
    <Layout>
      <div>
        <h1>Lesson Templates</h1>
        <div>
          <Link href="/lesson/timetable/new">
            <a className="button">New Timetable</a>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Day</td>
              <td>Time</td>
              <td>Duration</td>
            </tr>
          </thead>
          <tbody>
            {result.data.timetable.map((t) => (
              <tr key={t.id}>
                <td>
                  <Link href={`/lesson/timetable/${t.id}`}>
                    <a>{t.group.name}</a>
                  </Link>
                </td>
                <td>{t.day}</td>
                <td>{t.start_time}</td>
                <td>{t.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default StudentsPage as FC<void>;
