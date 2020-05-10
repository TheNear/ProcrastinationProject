// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Input from "../../componentHelpers/Input";
import Button from "../../componentHelpers/Button";
import { initPopupEvent } from "../../redux/modalPopup/action";

function SignIn() {
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
      <FontAwesomeIcon icon={faUserGraduate} className="auth__icon" size="7x" />
      <form className="auth__form" action="post">
        <Input className="auth__email" type="text">
          Username
        </Input>
        <Input className="auth__password" type="password">
          Password
        </Input>
        <Button type="submit" className="auth__submit-btn">
          Sign In
        </Button>
      </form>
      <p className="auth__text">
        Don&apos;t have account?{" "}
        <a
          className="auth__link"
          href="/"
          alt="register link"
          onClick={clickLinkHandler}
        >
          Register
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

export default SignIn;
