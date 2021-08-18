import React, { useState } from "react";

/** SearchBar Component
 *
 *  State:
 *    - term
 *
 *  Props:
 *    - search (parent callback)
 * 
 * { CompaniesContainer, JobsContainer } -> SearchBar
 */
export default function SearchBar({ search, initialTerm }) {
  const [term, setTerm] = useState(initialTerm);

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  // trim term before passing to search
  function handleSubmit(evt) {
    evt.preventDefault();
    search(term.trim());
  }

  return (
    <form onSubmit={handleSubmit} style={{width: "60%"}}>
      <div className="input-group mb-3">
        <input 
          type="text"
          value={term} 
          className="form-control" 
          placeholder="Enter search term" 
          aria-label="Search term" 
          onChange={handleChange}
          aria-describedby="button-addon2"/>
        <button className="btn btn-primary" type="submit" id="button-addon2">Search</button>
      </div>
    </form>
  );
}