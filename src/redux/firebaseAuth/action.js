import { initPopupEvent } from "../modalPopup/action";

const errorList = {
  "auth/invalid-email": "Некорректно введён E-mail адресс, попробуйте снова.",
  "auth/user-not-found": "Пользователь не найдет, попробуйте другой email",
  "auth/wrong-password":
    "Неверно введён пароль. Проверьте раскладку, CAPSLOCK и попробуйте снова.",
  "auth/network-request-failed":
    "Проблема с интернет соединением или с сервером, попробуйте позже.",
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
    .then((response) =>
      dispatch(
        initPopupEvent({
          type: "success",
          message: `Добро пожаловать ${response.user.email}`,
        })
      )
    )
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
