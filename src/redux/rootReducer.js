import { combineReducers } from "redux";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import modalPopup from "./modalPopup/reducer";
import userProfile from "./userProfile/reducer";

export default combineReducers({
  userProfile,
  modalPopup,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
