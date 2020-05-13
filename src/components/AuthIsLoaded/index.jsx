import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import "./AuthIsLoaded.scss";
import AuthPage from "../../pages/AuthPage";
import Preloader from "../../componentHelpers/Preloader";

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) return <Preloader />;
  if (isLoaded(auth) && isEmpty(auth)) return <AuthPage />;
  return [children];
};

export default AuthIsLoaded;
