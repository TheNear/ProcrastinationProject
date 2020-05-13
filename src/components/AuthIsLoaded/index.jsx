import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import loaderSvg from "../../assets/img/three-dots.svg";
import "./AuthIsLoaded.scss";
import AuthPage from "../../pages/AuthPage";

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) {
    return (
      <div className="auth-loader">
        <img className="auth-loader__img" src={loaderSvg} alt="preloader" />
      </div>
    );
  }

  if (isLoaded(auth) && !isEmpty(auth)) {
    return < AuthPage />
  }
  
  
  return [children];
};

export default AuthIsLoaded;
