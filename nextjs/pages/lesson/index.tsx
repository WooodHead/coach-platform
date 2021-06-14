import Link from "next/link";
import { Layout } from "../../src/components/layout";
import { useGetLessonsSmallQuery } from "../../src/generated-graphql";

function LessonPage() {
  const [result] = useGetLessonsSmallQuery();

  return (
    <Layout>
      <div>
        <h1>Lessons</h1>
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
    </Layout>
  );
}

export default LessonPage;
