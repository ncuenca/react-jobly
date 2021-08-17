import React, { useEffect, useState } from "react"
import JoblyApi from "./api"
import SearchBar from "./SearchBar";
import JobList from './JobList';

/** JobsContainer renders JobList and SearchBar.
 * 
 *  On first mount, renders list of all current jobs.
 *  Can search through jobs by title.
 * 
 *  State:
 *      - isLoading
 *      - jobs
 * 
 * JobsContainer -> { JobList, SearchBar }
 */

export default function JobsContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(function getAlljobs() {
        async function fetchJobs() {
            const jobs = await JoblyApi.getJobs();
            setJobs(jobs);
            setIsLoading(false);
        }
        fetchJobs();
    }, []);

    async function search(term) {
        setIsLoading(true);
        const jobs = await JoblyApi.getJobs(term);
        setJobs(jobs);
        setIsLoading(false);
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="jobsContainer">
            <div className="jobsContainer-SearchBar">
                <SearchBar search={search} />
            </div>

            <JobList jobs={jobs}/>
            
        </div>
    )
}