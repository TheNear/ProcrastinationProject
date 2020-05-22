// eslint-disable-next-line no-unused-vars
import React, { Fragment, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Input from "../../componentHelpers/Input";
import Button from "../../componentHelpers/Button";
// import { signUp } from "../../redux/userProfile/action";
import useForm from "../../hooks/useForm";
import { regFormValid } from "../../assets/js/validation";
import useModal from "../../hooks/useModal";

const inputs = [
  {
    name: "username",
    text: "Username",
    class: "auth__username",
    type: "text",
  },
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
  {
    name: "password_repeat",
    text: "Password repeat",
    class: "auth__password-repeat",
    type: "password",
  },
];

const SignUp = () => {
  const history = useHistory();
  const { showError } = useModal();

  const onFormSubmit = useCallback(
    // (username) => {
    //   dispatch(
    //     signUp({
    //       email: username.email,
    //       password: username.password,
    //       username: username.username,
    //     })
    //   );
    // },
    () => {
      showError(
        "Данная функция отключена или пока не реализована. Для входа и тестирования приложения используйте testuser@gmail.com и пароль 123456",
        10000
      );
    },
    []
  );

  const { values, errors, handleChange, handleSumbit, resetErrors } = useForm(
    onFormSubmit,
    regFormValid
  );

  const clickLinkHandler = (evt) => {
    evt.preventDefault();
    showError();
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
