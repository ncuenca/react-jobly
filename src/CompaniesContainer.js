import React, { useEffect, useState } from "react"
import JoblyApi from "./api"
import SearchBar from "./SearchBar";

/** CompaniesContainer renders CompanyList and SearchBar.
 * 
 *  On first mount, renders list of all current companies.
 * 
 *  State:
 *      - isLoading
 *      - companies
 */
export default function CompaniesContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    useEffect(function getAllCompanies() {
        async function fetchCompanies() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
            setIsLoading(false);
        }
        fetchCompanies();
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="CompaniesContainer">
            <div className="CompaniesContainer-SearchBar">
                <SearchBar />
            </div>

            {companies.map(company => (
                <div className="CompaniesContainer-company">
                    <h3>{company.name}</h3>
                    <p>{company.description}</p>
                </div>
            ))}
        </div>
    )
}