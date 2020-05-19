// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../../componentHelpers/Input";
import Button from "../../componentHelpers/Button";
import { initPopupEvent } from "../../redux/modalPopup/action";
import { signUp } from "../../redux/userProfile/action";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordRepeatValid, setPasswordRepeatValid] = useState(true);

  const clickLinkHandler = (evt) => {
    evt.preventDefault();
    dispatch(
      initPopupEvent(
        "Данная функция еще не реализована, мы работаем над ней. :(",
        "error"
      )
    );
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (password === passwordRepeat) {
      dispatch(
        signUp({
          username,
          email,
          password,
        })
      );
      setPassword("");
      setPasswordRepeat("");
    }
  };

  const loginLinkHandler = (evt) => {
    evt.preventDefault();
    history.push("/");
  };

  return (
    <>
      <FontAwesomeIcon icon={faUserGraduate} className="auth__icon" size="7x" />
      <form onSubmit={onFormSubmit} className="auth__form" action="post">
        <Input
          valid={usernameValid}
          changeValid={setUsernameValid}
          value={username}
          onChange={setUsername}
          className="auth__username"
          type="text"
        >
          Username
        </Input>
        <Input
          changeValid={setEmailValid}
          valid={emailValid}
          value={email}
          onChange={setEmail}
          className="auth__email"
          type="email"
        >
          E-mail
        </Input>
        <Input
          changeValid={setPasswordValid}
          valid={passwordValid}
          value={password}
          onChange={setPassword}
          className="auth__password"
          type="password"
        >
          Password
        </Input>
        <Input
          changeValid={setPasswordRepeatValid}
          valid={passwordRepeatValid}
          value={passwordRepeat}
          onChange={setPasswordRepeat}
          className="auth__password-repeat"
          type="password"
        >
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
          onClick={loginLinkHandler}
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
