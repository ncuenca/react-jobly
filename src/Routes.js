import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage.js";
import CompaniesContainer from "./CompaniesContainer";
import JobsContainer from "./JobsContainer";
import CompanyDetails from "./CompanyDetails";
import ProfileForm from "./ProfileForm";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

/** Routes for Jobly App
 *
 */

export default function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/companies">
          <CompaniesContainer />
        </Route>
        <Route exact path="/jobs">
          <JobsContainer />
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetails />
        </Route>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}
