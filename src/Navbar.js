import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar({ login, register }) {
    return (
        <nav className="NavBar navbar navbar-light bg-light mb-4">
          <NavLink exact to='/'>Jobly</NavLink>
          <NavLink exact to='/profile'>Profile</NavLink>
          <NavLink exact to='/signup' register={register}>Signup</NavLink>
          <NavLink exact to='/login' login={login}>Login</NavLink>
          <NavLink exact to='/companies'>Companies</NavLink>
          <NavLink exact to='/jobs'>Jobs</NavLink>
        </nav>
      );
}