/** Renders Job Card
 * 
 * displays information about each job
 * 
 * Props:
 *  - job
 * 
 * JobList -> JobCard
 */
export default function JobCard({ job }) {
    return (
        <div className="JobCard">
            <h3>{job.title}</h3>
            <p>{job.companyHandle}</p>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
        </div>
    );
}