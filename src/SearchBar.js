import React, { useState } from "react";

/** SearchBar Component
 *
 *  State:
 *    - formData
 *
 *  Props:
 *    - search (parent callback)
 */
export default function SearchBar({ search }) {
  const [formData, setFormData] = useState("");

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setFormData("");
  }

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          value={formData}
          placeholder="Enter search term"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}