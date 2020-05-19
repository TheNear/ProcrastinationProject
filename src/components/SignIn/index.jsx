// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../../componentHelpers/Input";
import Button from "../../componentHelpers/Button";
import { initPopupEvent } from "../../redux/modalPopup/action";
import { signIn } from "../../redux/userProfile/action";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickLinkHandler = (evt) => {
    evt.preventDefault();
    dispatch(
      initPopupEvent(
        "Данная функция еще не реализована, мы работаем над ней. :(",
        "error"
      )
    );
  };

  const regLinkHandler = (evt) => {
    evt.preventDefault();
    history.push("/registration");
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signIn({ email, password }));
    setPassword("");
  };

  return (
    <>
      <FontAwesomeIcon icon={faUserGraduate} className="auth__icon" size="7x" />
      <form onSubmit={onFormSubmit} className="auth__form" action="post">
        <Input
          onChange={setEmail}
          value={email}
          className="auth__email"
          type="email"
        >
          E-mail
        </Input>
        <Input
          onChange={setPassword}
          value={password}
          className="auth__password"
          type="password"
        >
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
          onClick={regLinkHandler}
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
