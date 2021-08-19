import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage.js";
import CompaniesContainer from "./CompaniesContainer";
import JobsContainer from "./JobsContainer";
import CompanyDetails from "./CompanyDetails";
import ProfileForm from "./ProfileForm";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

/** Routes for Jobly App
 *
 *  App -> Routes
 */
//TODO: route protection 
export default function Routes({ login, register }) {
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
          <SignupForm register={register}/>
        </Route>
        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}
