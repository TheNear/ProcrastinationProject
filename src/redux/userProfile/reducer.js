import { SET_USER, CHANGE_USER_NAME } from "./types";

const initialState = {
  email: "",
  username: "",
  uid: "",
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case CHANGE_USER_NAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default userProfile;
