import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

export default function BusinessGlossariesPage() {
  const query = gql`
    {
      businessGlossaries {
        id
        title
        description
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
          <h1>Business Glossary</h1>
        </div>
        <div className="d-flex flex-column">
          {data.businessGlossaries.map((term) => (
            <div key={term.id} className="mb-3">
              <h2 className="h4">{term.title}</h2>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
