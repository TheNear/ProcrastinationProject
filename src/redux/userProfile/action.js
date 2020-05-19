import { initPopupEvent } from "../modalPopup/action";
import { SET_USER } from "./types";

const errorList = {
  "auth/invalid-email": "Некорректно введён E-mail адресс, попробуйте снова.",
  "auth/user-not-found": "Пользователь не найдет, попробуйте другой email",
  "auth/wrong-password":
    "Неверно введён пароль. Проверьте раскладку, CAPSLOCK и попробуйте снова.",
  "auth/network-request-failed":
    "Проблема с интернет соединением или с сервером, попробуйте позже.",
  "auth/weak-password": "Слишком слабый пароль. Минимум 6 символов.",
};

export const signIn = ({ email, password }) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(
        initPopupEvent({
          type: "success",
          message: `Добро пожаловать ${response.user.email}`,
        })
      );
    })
    .catch((error) =>
      dispatch(
        initPopupEvent({
          type: "error",
          message: errorList[error.code] || error.message,
        })
      )
    );
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut();
};

export const signUp = ({ email, password, username }) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      firestore.collection("users").doc(user.uid).set({
        email: user.email,
        uid: user.uid,
        username,
        caps: 0,
        daysinrow: 0,
      });
    })
    .catch((error) => {
      dispatch(
        initPopupEvent({
          type: "error",
          message: errorList[error.code] || error.message,
        })
      );
    });
};

export const setUser = (userProfile) => ({
  type: SET_USER,
  payload: userProfile,
});

export const getUserProfile = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const { currentUser } = getFirebase().auth();
  const firestore = getFirestore();

  firestore
    .collection("users")
    .doc(currentUser.uid)
    .get()
    .then((user) => {
      const userData = user.data();
      dispatch(setUser(userData));
    })
    .catch((error) => {
      console.log(error);
    });
};
