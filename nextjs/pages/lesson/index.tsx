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
          plan
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
        <a>New Lesson</a>
      </Link>
      <ul>
        {result.data &&
          result.data.lesson.map((d) => (
            <li key={d.id}>
              <Link href={`/lesson/${d.id}`}>
                <a>
                  {d.name} {new Date(d.start_time).toLocaleString()}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LessonPage;
