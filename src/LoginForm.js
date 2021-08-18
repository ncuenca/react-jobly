import React, { useState } from "react";

/** Renders a Login Form to login a user
 * 
 *  After submitting form: TODO:
 *      - login user
 *      - redirect to all companies
 * 
 *  State:
 *      - formData
 * 
 * App -> Routes -> LoginForm
 */
export default function LoginForm() {
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
        <div className="LoginForm container">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} style={{width: "60%"}}>
                <div className="form-group">
                    <label htmlFor="login-user">Username: </label>
                    <input
                        id="login-user"
                        name="user"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.user}
                        aria-label="Username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Password: </label>
                    <input
                        id="login-password"
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.password}
                        aria-label="Password"
                    />
                </div>
                
                <button className="btn btn-primary mt-4" type="submit">Sign Up!</button>
            </form>
        </div>
    )
}