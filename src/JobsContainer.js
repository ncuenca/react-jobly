import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import JobList from './JobList';
import './JobsContainer.css'

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
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(function getJobs() {
        search(searchTerm);
    }, [searchTerm]);

    async function search(term) {
        setSearchTerm(term);
        const jobs = await JoblyApi.getJobs(term);
        setJobs(jobs);
        setIsLoading(false);
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="JobsContainer container">
            <SearchBar search={search} initialTerm={searchTerm} />
            <JobList jobs={jobs}/>         
        </div>
    )
}