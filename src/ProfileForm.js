import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "./userContext";
import './ProfileForm.css'

/** Renders a form to edit user profile. 
 *  Inaccessible if not logged in.
 *  
 *  Props:
 *      - update
 * 
 *  State:
 *      - formData
 *      - success 
 *      - errors
 * 
 *  Context: 
 *      - UserContext
 * 
 *  Routes -> ProfileForm
 */
export default function ProfileForm({ update }) {
  const currentUser = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  });
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await update(currentUser.username, formData);
      setSuccess(["Updated successfully."]);
    } catch (errs) {
      setErrors(errs);
    }
  }

  return (
    <div className="ProfileForm container mb-4">
      {errors.length > 0 &&
        errors.map((error) => (
          <div key={error} className="alert alert-danger">
            <strong>{error}</strong>
          </div>
        ))}
      <form onSubmit={handleSubmit} style={{ width: "60%" }}>
        <h1>Profile</h1>
        <div className="form-group">
          <strong>Username</strong>
          <p>{currentUser.username}</p>
        </div>
        <div className="form-group mb-4">
          <strong>
            <label htmlFor="first-name">First Name</label>
          </strong>
          <input
            id="first-name"
            name="firstName"
            className="form-control"
            onChange={handleChange}
            value={formData.firstName || ""}
            aria-label="first-name"
          />
        </div>
        <div className="form-group mb-4">
          <strong>
            <label htmlFor="last-name">Last Name</label>
          </strong>
          <input
            id="last-name"
            name="lastName"
            className="form-control"
            onChange={handleChange}
            value={formData.lastName || ""}
            aria-label="last-name"
          />
        </div>
        <div className="form-group mb-4">
          <strong>
            <label htmlFor="email">Email</label>
          </strong>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            onChange={handleChange}
            value={formData.email || ""}
            aria-label="email"
          />
        </div>
        <div className="form-group mb-4">
          <strong>
            <label htmlFor="password">Confirm password to make changes</label>
          </strong>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            onChange={handleChange}
            value={formData.password || ""}
            aria-label="Password"
          />
        </div>
        {success.length > 0 && (
          <div key={success} className="alert alert-success">
            <strong>{success}</strong>
          </div>
        )}
        <button className="btn btn-primary" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}
