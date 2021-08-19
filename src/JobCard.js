import './JobCard.css';

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
        <div className="JobCard container mb-4"style={{width: "60%"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.companyHandle}</h6>
                    <p className="card-text">Salary: {job.salary}</p>
                    <p className="card-text">Equity: {job.equity}</p>
                </div>
            </div>
        </div>
    );
}