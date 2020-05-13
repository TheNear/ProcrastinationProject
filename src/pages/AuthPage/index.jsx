import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const AuthPage = () => {
  return (
    <div className="auth-wrap">
      <div className="auth-container">
        <Route exact path="/" component={SignIn} />
        <Route exact path="/registration" component={SignUp} />
        <Redirect from="*" to="/" />
      </div>
    </div>
  );
};

export default AuthPage;
