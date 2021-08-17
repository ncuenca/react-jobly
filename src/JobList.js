import JobCard from './JobCard';

/** Renders list of JobCards
 * 
 * Props:
 *  - jobs
 * 
 * { JobsContainer, CompanyDetails } -> JobList -> JobCard
 */
export default function JobList({ jobs }) {
    return jobs.map(job => <JobCard job={job}/>);
}