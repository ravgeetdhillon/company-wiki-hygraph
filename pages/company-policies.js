import Link from "next/link";
import { marked } from "marked";
import { gql, useQuery } from "@apollo/client";

export default function CompanyPoliciesPage() {
  const query = gql`
    {
      companyPolicies {
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
          <h1>Company Policy</h1>
        </div>
        <div className="d-flex flex-column">
          {data.companyPolicies.map((policy) => (
            <div key={policy.id} className="mb-3">
              <h2 className="h4">{policy.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked.parse(policy.description),
                }}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
