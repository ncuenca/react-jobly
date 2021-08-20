import React, { useState } from "react";

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
export default function SearchBar({ search, initialTerm }) {
  const [term, setTerm] = useState(initialTerm);

  // useEffect separates request from handleChange

  function handleChange(evt) {
    setTerm(() => {
      search(evt.target.value.trim());
      return evt.target.value;
    });
  }

  // trim term before passing to search
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   search(term.trim());
  // }

  return (
    <form style={{width: "60%"}}>
      <div className="input-group mb-3">
        <input 
          type="text"
          value={term} 
          className="form-control" 
          placeholder="Enter search term" 
          aria-label="Search term" 
          onChange={handleChange}
          aria-describedby="button-addon2"/>
      </div>
    </form>
  );
}