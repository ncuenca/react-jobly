import { NavLink } from "react-router-dom";
import "./Navbar.css"
import UserContext from "./userContext";
import React, { useContext } from "react";


/** Renders a Navigation bar that persists whether logged in or not.
 *
 *  If a user is logged in, shows Companies, Jobs, Profile, and Logout links.
 *  If not, shows option to login or register.
 *  
 *  App -> Navbar
 */
export default function Navbar() {
  const currentUser = useContext(UserContext);

  if (currentUser) {
    return (
        <nav className="NavBar navbar navbar-light bg-light mb-4">
          <NavLink exact to='/'>Jobly</NavLink>
          <NavLink exact to='/companies'>Companies</NavLink>
          <NavLink exact to='/jobs'>Jobs</NavLink>
          <NavLink exact to='/profile'>Profile</NavLink>
        </nav>
      );
  } 
  
  return (
    <nav className="NavBar navbar navbar-light bg-light mb-4">
      <NavLink exact to='/'>Jobly</NavLink>
      <NavLink exact to='/signup'>Signup</NavLink>
      <NavLink exact to='/login'>Login</NavLink>
    </nav>
    )   
}