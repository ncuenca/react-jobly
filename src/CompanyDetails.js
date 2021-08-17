import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobList from "./JobList";

/** CompanyDetails renders details about a Company,
 *  including all jobs at that company.
 *
 *  Route: /companies/:handle
 *
 *  State:
 *      - isLoading
 *      - company
 *
 *  Routes -> CompanyDetails -> Joblist
 *
 */
export default function CompanyDetails() {
  const { handle } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanyDetail() {
      async function fetchCompany() {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
        setIsLoading(false);
      }
      fetchCompany();
    },
    [company, handle]
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="CompanyDetails container">
      <h2>{company.name}</h2>
      <h3>{company.description}</h3>

      <JobList jobs={company.jobs} />
    </div>
  );
}
