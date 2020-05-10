import React from "react";
import SignIn from "../../components/SignIn";
// import SignUp from "../../components/SignUp";

const AuthPage = () => {
  return (
    <div className="auth-wrap">
      <div className="auth-container">
        <SignIn />
        {/* <SignUp /> */}
      </div>
    </div>
  );
};

export default AuthPage;
