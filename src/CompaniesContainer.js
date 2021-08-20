import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "./api";
import SearchBar from "./SearchBar";
import CompanyList from "./CompanyList";
import "./CompaniesContainer.css";
import UserContext from "./userContext";
import Loading from "./Loading";
import debounce from "lodash.debounce";
import ReactPaginate from "react-paginate";

/** CompaniesContainer renders CompanyList and SearchBar.
 *
 *  On first mount, renders a list of all current companies.
 *  Can search through companies by name.
 *
 *  Inaccessible if not logged in.
 *
 *  State:
 *      - isLoading
 *      - companies
 *
 *  Context:
 *      - UserContext
 *
 *  CompaniesContainer -> { CompanyList, SearchBar }
 */
export default function CompaniesContainer() {
  const currentUser = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(
    function getCompanies() {
      search(searchTerm);
    },
    [searchTerm]
  );

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  async function search(term) {
    setSearchTerm(term);
    const companies = await JoblyApi.getCompanies(term);
    setCompanies(companies);
    setIsLoading(false);
  }

  // search fires only once after a 500ms input pause
  const debounceSearch = debounce(search, 500);

  if (isLoading) return <Loading />;

  return (
    <div className="CompaniesContainer container">
      <SearchBar search={debounceSearch} initialTerm={searchTerm} />
      <CompanyList companies={companies} />
    </div>
  );
}
