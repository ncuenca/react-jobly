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

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
  }

  return (
    <div className="SearchBar">
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