export const signIn = ({ email, password }) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut();
};
