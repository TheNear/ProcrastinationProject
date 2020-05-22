// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../../componentHelpers/Input";
import Button from "../../componentHelpers/Button";
import { initPopupEvent } from "../../redux/modalPopup/action";
import { signIn } from "../../redux/userProfile/action";
import useForm from "../../hooks/useForm";
import { loginFormValid } from "../../assets/js/validation";

const inputs = [
  {
    name: "email",
    text: "E-mail",
    class: "auth__email",
    type: "email",
  },
  {
    name: "password",
    text: "Password",
    class: "auth__password",
    type: "password",
  },
];

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFormSubmit = useCallback(
    (username) => {
      dispatch(
        signIn({
          email: username.email,
          password: username.password,
        })
      );
    },
    [dispatch]
  );

  const { values, errors, handleChange, handleSumbit, resetErrors } = useForm(
    onFormSubmit,
    loginFormValid
  );

  const clickLinkHandler = (evt) => {
    evt.preventDefault();
    dispatch(
      initPopupEvent({
        message: "Данная функция отключена или пока не реализована.",
        type: "error",
      })
    );
  };

  const regLinkHandler = (evt) => {
    evt.preventDefault();
    history.push("/registration");
  };

  return (
    <>
      <FontAwesomeIcon icon={faUserGraduate} className="auth__icon" size="7x" />
      <form onSubmit={handleSumbit} className="auth__form" action="post">
        {inputs.map((input) => (
          <Input
            key={input.text + input.class}
            name={input.name}
            resetValid={resetErrors}
            errors={errors[input.name] || ""}
            value={values[input.name] || ""}
            onChange={handleChange}
            className={input.class}
            type={input.type}
          >
            {input.text}
          </Input>
        ))}

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
