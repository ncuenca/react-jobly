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
    <div className="SearchBar container mb-4">
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          placeholder="Enter search term"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}