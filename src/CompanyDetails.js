import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobList from "./JobList";
import "./CompanyDetails.css"

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
      <div className="CompanyDetails-info mb-4">
        <h4>{company.name}</h4>
        <h5>{company.description}</h5>
      </div>

      <JobList jobs={company.jobs} />
    </div>
  );
}
