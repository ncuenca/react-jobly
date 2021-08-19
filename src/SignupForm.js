import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import UserContext from "./userContext";
import './SignupForm.css';

/** Renders a Signup Form to create a new user
 *  
 *  After submitting form: 
 *      - registers and logs user in
 *      - redirect to all companies
 * 
 *  State:
 *      - formData
 * 
 *  Context:
 *      - currentUser {username, firstName, lastName, email}
 * 
 *  App -> Routes -> SignupForm
 */
export default function SignupForm({ register }) {
    const currentUser = useContext(UserContext);
    
    const history = useHistory();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);

    function handleChange(evt) { 
        const { name, value } = evt.target;
        setFormData(() => ({
          ...formData,
          [name]: value
        }));
    }
    
    async function handleSubmit(evt) { 
        evt.preventDefault();
        try {
            await register(formData)
            history.push('/companies')
        } catch (errs) {
            setErrors(errs);
        }
        
    }

    if(currentUser) {
        return <Redirect to="/" />
    }

    return (
        <div className="SignupForm container">
            {errors.length > 0 && errors.map(error=> (
                <div key={error} className="alert alert-danger">
                    <strong>{error}</strong>
                </div>
            ))}
            <form onSubmit={handleSubmit} style={{width: "60%"}}>
                <h1>Sign up</h1>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input
                        id="username"
                        name="username"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.username || ""}
                        aria-label="Username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newuser-password">Password: </label>
                    <input
                        id="newuser-password"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.password || ""}
                        aria-label="Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newuser-first-name">First Name: </label>
                    <input
                        id="newuser-first-name"
                        name="firstName"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.firstName || ""}
                        aria-label="first-name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newuser-last-name">Last Name: </label>
                    <input
                        id="newuser-last-name"
                        name="lastName"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.lastName || ""}
                        aria-label="last-name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newuser-email">Email: </label>
                    <input
                        id="newuser-email"
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.email || ""}
                        aria-label="email"
                    />
                </div>
                <button className="btn btn-primary mt-4" type="submit">Sign Up!</button>
            </form>
        </div>
    )
}