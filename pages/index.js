import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="mb-4">
        <h1>Welcome to Company Wiki</h1>
      </div>
      <div className="d-flex flex-column">
        <Link href="/employees" passHref>
          <a className="mb-3">Employees</a>
        </Link>
        <Link href="/company-policies" passHref>
          <a className="mb-3">Company Policies</a>
        </Link>
        <Link href="/business-glossary" passHref>
          <a className="mb-3">Business Glossary</a>
        </Link>
        <Link href="/course-videos" passHref>
          <a className="mb-3">Course Videos</a>
        </Link>
      </div>
    </>
  );
}
