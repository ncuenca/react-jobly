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
<<<<<<< HEAD
    setTerm(evt.target.value);
    search(evt.target.value);
=======
    setTerm(() => {
      search(evt.target.value.trim());
      return evt.target.value;
    });
>>>>>>> 5cd6ea6d5a913168787cdd3533837da7b750591e
  }

  // trim term before passing to search
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   search(term.trim());
  // }

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} style={{width: "60%"}}>
      <div className="input-group mb-3 mt-3">
=======
    <form style={{width: "60%"}}>
      <div className="input-group mb-3">
>>>>>>> 5cd6ea6d5a913168787cdd3533837da7b750591e
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