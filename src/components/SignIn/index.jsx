// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../../componentHelpers/Input";
import Button from "../../componentHelpers/Button";

function SignIn() {
  return (
    <>
      <FontAwesomeIcon icon={faUser} className="auth-signin__icon" size="10x" />
      <form className="auth-signin__form" action="post">
        <Input className="signin__email" type="text">
          Username
        </Input>
        <Input className="signin__password" type="password">
          Password
        </Input>
        <Button type="submit" className="signin__submit-btn">
          Sign In
        </Button>
      </form>
      <p className="auth-signin__text">
        Don&apos;t have account?{" "}
        <a className="auth-signin__link" href="/" alt="register link">
          Sign Up
        </a>
      </p>
      <a className="auth-signin__link" href="/" alt="Forgot password">
        Forgot your password?
      </a>
    </>
  );
}

export default SignIn;
