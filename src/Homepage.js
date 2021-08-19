import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "./userContext";

/** Renders the homepage of Jobly.
 *
 *  If a user is logged in, shows a welcome message.
 *  If not, shows option to login or register.
 *
 *  Routes -> Homepage
 */
export default function Homepage() {
  const currentUser = useContext(UserContext);

  if (!currentUser) {
    return (
      <div className="Homepage container">
        <div className="Homepage-msg container">
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          <Link to="/signup"><button className="btn btn-primary me-2">Sign Up</button></Link>
          <Link to="/login"><button className="btn btn-primary">Login</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="Homepage">
      <div className="Homepage-msg container">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <h2>Welcome Back, {currentUser.firstName}</h2>
      </div>
    </div>
  );
}
