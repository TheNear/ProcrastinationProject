import { combineReducers } from "redux";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import modalPopupReducer from "./modalPopup/reducer";

export default combineReducers({
  modalPopupReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
