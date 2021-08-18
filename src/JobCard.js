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
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{job.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{job.companyHandle}</h6>
                    <p class="card-text">Salary: {job.salary}</p>
                    <p class="card-text">Equity: {job.equity}</p>
                </div>
            </div>
        </div>
    );
}