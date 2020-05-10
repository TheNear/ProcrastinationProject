// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Input from "../../componentHelpers/Input";
import Button from "../../componentHelpers/Button";
import { initPopupEvent } from "../../redux/modalPopup/action";

function SignUp() {
  const dispatch = useDispatch();

  const clickLinkHandler = (evt) => {
    evt.preventDefault();
    dispatch(
      initPopupEvent(
        "Данная функция еще не реализована, мы работаем над ней. :(",
        "error"
      )
    );
  };

  return (
    <>
      <FontAwesomeIcon icon={faUser} className="auth__icon" size="10x" />
      <form onSubmit={clickLinkHandler} className="auth__form" action="post">
        <Input className="auth__email" type="text">
          Username
        </Input>
        <Input className="auth__password" type="password">
          Password
        </Input>
        <Input className="auth__password-repeat" type="password">
          Password Repeat
        </Input>
        <Button type="submit" className="auth__submit-btn">
          Register
        </Button>
      </form>
      <p className="auth__text">
        Already have account?{" "}
        <a
          className="auth__link"
          href="/"
          alt="register link"
          onClick={clickLinkHandler}
        >
          Sign In
        </a>
      </p>
      <a
        className="auth__link"
        href="/"
        alt="Forgot password"
        onClick={clickLinkHandler}
      >
        Forgot your password?
      </a>
    </>
  );
}

export default SignUp;
