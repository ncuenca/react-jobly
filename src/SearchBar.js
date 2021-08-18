import React, { useState } from "react";

/** SearchBar Component
 *
 *  State:
 *    - formData
 *
 *  Props:
 *    - search (parent callback)
 * 
 * { CompaniesContainer, JobsContainer } -> SearchBar
 */
export default function SearchBar({ search }) {
  const [term, setTerm] = useState("");

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
      <div class="input-group mb-3">
        <input 
          type="text"
          value={term} 
          class="form-control" 
          placeholder="Enter search term" 
          aria-label="Search term" 
          onChange={handleChange}
          aria-describedby="button-addon2"/>
        <button class="btn btn-primary" type="submit" id="button-addon2">Search</button>
      </div>
    </form>
  );
}