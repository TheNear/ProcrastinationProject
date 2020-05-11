import React from "react";
import "./App.scss";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { firebase, rrfConfig } from "./firebase";
import store from "./redux/store";
// import MainPage from "./pages/MainPage";
import ModalPopupGroup from "./componentHelpers/ModalPopupGroup";
import AuthPage from "./pages/AuthPage";

const firebaseProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...firebaseProps}>
          {/* <MainPage /> */}
          <AuthPage />
          <ModalPopupGroup />
        </ReactReduxFirebaseProvider>
      </Provider>
    </Router>
  );
}
