import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";


import MainPage from "./pages/MainPage";
import ModalPopupGroup from "./componentHelpers/ModalPopupGroup";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        {/* <MainPage /> */}
        <AuthPage />
        <ModalPopupGroup />
      </Provider>
    </Router>
  );
}
