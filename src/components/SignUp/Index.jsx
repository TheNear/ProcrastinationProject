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
import useForm from "../../hooks/useForm";
import { regFormValid } from "../../assets/js/validation";

const inputs = [
  {
    text: "Username",
    class: "auth__username",
    type: "text",
  },
  {
    text: "E-mail",
    class: "auth__email",
    type: "email",
  },
  {
    text: "Password",
    class: "auth__password",
    type: "password",
  },
  {
    text: "Password repeat",
    class: "auth__password-repeat",
    type: "password",
  },
];

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFormSubmit = (email, password, username) => {
    dispatch(
      signUp({
        email,
        password,
        username,
      })
    );
  };

  const { values, errors, handleChange, handleSumbit } = useForm(
    onFormSubmit,
    regFormValid
  );

  const clickLinkHandler = (evt) => {
    evt.preventDefault();
    dispatch(
      initPopupEvent(
        "Данная функция еще не реализована, мы работаем над ней. :(",
        "error"
      )
    );
  };

  const loginLinkHandler = (evt) => {
    evt.preventDefault();
    history.push("/");
  };

  return (
    <>
      <FontAwesomeIcon icon={faUserGraduate} className="auth__icon" size="7x" />
      <form onSubmit={handleSumbit} className="auth__form" action="post">
        {inputs.map((input) => (
          <Input
            key={input.text + input.class}
            valid={errors || ""}
            value={values[input.class] || ""}
            onChange={handleChange}
            className={input.class}
            type={input.type}
          >
            {input.text}
          </Input>
        ))}
        <Button type="submit" className="auth__submit-btn" value="Register">
          Register
        </Button>
      </form>
      <p className="auth__text">
        Already have account?&nbsp;
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
};

export default SignUp;
