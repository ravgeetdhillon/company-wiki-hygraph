import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

export default function EmployeesPage() {
  const query = gql`
    {
      employees {
        id
        bambooHrId
        external {
          id
          firstName
          lastName
          gender
          jobTitle
        }
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
          <h1>Employees</h1>
        </div>
        <div className="d-flex flex-column">
          {data.employees.map((employee) => (
            <div key={employee.id} className="mb-3">
              <h2 className="h4">
                {employee.external.firstName} {employee.external.lastName}
              </h2>
              {employee.external.gender && (
                <p className="text-muted mb-0">{employee.external.gender}</p>
              )}
              <p className="text-muted">{employee.external.jobTitle}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
