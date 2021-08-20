import React, { useState } from "react";
import './SearchBar.css'

/** SearchBar Component
 *
 * Props:
 *    - search (parent callback) that allows for live search
 * 
 *  State:
 *    - term
 * 
 * { CompaniesContainer, JobsContainer } -> SearchBar
 */
export default function SearchBar({ search, initialTerm, isJobs, filter, setFilter }) {
  const [term, setTerm] = useState(initialTerm);

  // useEffect separates request from handleChange

  function handleChange(evt) {
    setTerm(() => {
      // if (filter === 'All') {
      search(evt.target.value.trim());
      // } else if (filter === 'Applied') {
      //   searchApplied(evt.target.value.trim());
      // } else if (filter === 'Unapplied') {
      //   searchUnapplied(evt.target.value.trim());
      // }
      return evt.target.value;
    });
  }


  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit} style={{width: "60%"}}>
        <div className="input-group mb-3 mt-3">
          <input 
            type="text"
            value={term} 
            className="form-control" 
            placeholder="Enter search term" 
            aria-label="Search term" 
            onChange={handleChange}
            aria-describedby="button-addon2"/>
            {isJobs && (
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {filter}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><button className="dropdown-item" onClick={() => setFilter('All')}>All</button></li>
                  <li><button className="dropdown-item" onClick={() => setFilter('Applied')}>Applied</button></li>
                  <li><button className="dropdown-item" onClick={() => setFilter('Unapplied')}>Unapplied</button></li>
                </ul>
              </div>)}
        </div>
        
      </form>
    </div>
  );
}