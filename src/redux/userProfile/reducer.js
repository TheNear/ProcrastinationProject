import { SET_USER } from "./types";

const initialState = {
  email: "",
  username: "",
  uid: "",
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userProfile;
