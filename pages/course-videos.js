import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

export default function CourseVideosPage() {
  const query = gql`
    {
      courseVideos {
        id
        title
        video
      }
    }
  `;

  const { loading, error, data } = useQuery(query);

  if (!loading && !error && data) {
    return (
      <>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <div className="mb-5 mt-3">
          <h1>Course Videos</h1>
        </div>
        <div className="d-flex flex-column">
          {data.courseVideos.map((course) => (
            <div key={course.id} className="mb-3">
              <h2 className="h4">{course.title}</h2>
              <p>{course.video.context.custom.caption}</p>
              <img
                className="img-fluid w-100 mb-3 rounded"
                src={course.video.url}
                alt={course.video.context.custom.caption}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
