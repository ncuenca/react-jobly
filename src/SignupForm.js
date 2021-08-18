import React, { useState } from "react";

/** Renders a Signup Form to create a new user
 *  
 *  After submitting form: TODO:
 *      - registers and logs user in
 *      - redirect to all companies
 * 
 *  State:
 *      - formData
 * 
 *  App -> Routes -> SignupForm
 */
export default function SignupForm() {
    const [formData, setFormData] = useState({});

    function handleChange(evt) { 
        const { name, value } = evt.target;
        setFormData(() => ({
          ...formData,
          [name]: value
        }));
    }
    
    function handleSubmit(evt) { 
        evt.preventDefault();
        setFormData({});
    }

    return (
        <div className="container">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} style={{width: "60%"}}>
                <div className="form-group">
                    <label htmlFor="newuser-user">Username: </label>
                    <input
                        id="newuser-user"
                        name="user"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.user}
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
                        value={formData.password}
                        aria-label="Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newuser-first-name">First Name: </label>
                    <input
                        id="newuser-first-name"
                        name="first-name"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.firstName}
                        aria-label="first-name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newuser-last-name">Last Name: </label>
                    <input
                        id="newuser-last-name"
                        name="last-name"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.lastName}
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
                        value={formData.email}
                        aria-label="email"
                    />
                </div>
                <button className="btn btn-primary mt-4" type="submit">Sign Up!</button>
            </form>
        </div>
    )
}