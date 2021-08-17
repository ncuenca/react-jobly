import React, { useEffect, useState } from "react"
import JoblyApi from "./api"
import SearchBar from "./SearchBar";
import CompanyList from './CompanyList';

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

    useEffect(function getAllCompanies() {
        async function fetchCompanies() {
            const companies = await JoblyApi.getCompanies();
            setCompanies(companies);
            setIsLoading(false);
        }
        fetchCompanies();
    }, []);

    async function search(term) {
        setIsLoading(true);
        const companies = await JoblyApi.searchCompanyNames(term);
        setCompanies(companies);
        setIsLoading(false);
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="CompaniesContainer">
            <div className="CompaniesContainer-SearchBar">
                <SearchBar search={search} />
            </div>

            <CompanyList companies={companies}/>
            
        </div>
    )
}