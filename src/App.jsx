import React, { lazy, Suspense } from "react";
import "./App.scss";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { firebase, rrfConfig } from "./firebase";
import store from "./redux/store";
import ModalPopupGroup from "./componentHelpers/ModalPopupGroup";
// import AuthPage from "./pages/AuthPage";
import AuthIsLoaded from "./components/AuthIsLoaded";
import Preloader from "./componentHelpers/Preloader";

const MainPage = lazy(() => import("./pages/MainPage"));

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
          <Switch>
            <AuthIsLoaded>
              <Suspense fallback={<Preloader />}>
                <MainPage />
              </Suspense>
            </AuthIsLoaded>
          </Switch>
          <ModalPopupGroup />
        </ReactReduxFirebaseProvider>
      </Provider>
    </Router>
  );
}
