import { signIn } from "next-auth/client";
import Link from "next/link";
import { gql, useQuery } from "urql";

function LessonPage() {
  const [result] = useQuery({
    query: gql`
      query MyQuery {
        lesson(order_by: { start_time: desc }) {
          id
          name
          duration
          start_time
        }
      }
    `,
  });

  return (
    <div>
      <h1>Coach Platform</h1>
      <h2>Lessons</h2>
      <Link href="/lesson/new">
        <a className="button">New Lesson</a>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {result.data &&
            result.data.lesson.map((d) => (
              <tr key={d.id}>
                <td>
                  <Link href={`/lesson/${d.id}`}>
                    <a>{d.name} </a>
                  </Link>
                </td>
                <td>{new Date(d.start_time).toLocaleString()}</td>
                <td>{d.duration}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default LessonPage;
