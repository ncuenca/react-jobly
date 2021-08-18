import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import CompanyList from './CompanyList';
import './CompaniesContainer.css';

/** CompaniesContainer renders CompanyList and SearchBar.
 * 
 *  On first mount, renders list of all current companies.
 *  Can search through companies by name.
 * 
 *  State:
 *      - isLoading
 *      - companies
 * 
 * CompaniesContainer -> { CompanyList, SearchBar }
 */
export default function CompaniesContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(function getCompanies() {
        search(searchTerm);
    }, [searchTerm]);

    async function search(term) {
        setSearchTerm(term);
        const companies = await JoblyApi.getCompanies(term);
        setCompanies(companies);
        setIsLoading(false);
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="CompaniesContainer container">
            <SearchBar search={search} initialTerm={searchTerm} />
            <CompanyList companies={companies}/>
        </div>
    )
}