import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import JobList from './JobList';
import './JobsContainer.css'
import UserContext from "./userContext";


/** JobsContainer renders JobList and SearchBar.
 * 
 *  On first mount, renders a list of all current jobs.
 *  Can search through jobs by title.
 * 
 *  Inaccessible if not logged in.

 *  State:
 *      - isLoading
 *      - jobs
 *      - searchTerm
 * 
 * JobsContainer -> { JobList, SearchBar }
 */

export default function JobsContainer() {
    const currentUser = useContext(UserContext);

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

    if (!currentUser) {
        return <Redirect to="/" />
    } 

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="JobsContainer container">
            <SearchBar search={search} initialTerm={searchTerm} />
            <JobList jobs={jobs}/>         
        </div>
    )
}