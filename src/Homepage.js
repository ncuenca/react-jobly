import { useContext } from "react";
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
        <p>You're not logged in.</p>
      </div>
    );
  }

  return (
    <div className="Homepage">
      <div className="container">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <h2>Welcome Back, {currentUser.firstName}</h2>
      </div>
    </div>
  );
}
