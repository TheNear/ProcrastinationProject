import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi_JHRdnm6J6g82hcnyBYw8aMmoXrLRtU",
  authDomain: "procrastinationproject-c3be2.firebaseapp.com",
  databaseURL: "https://procrastinationproject-c3be2.firebaseio.com",
  projectId: "procrastinationproject-c3be2",
  storageBucket: "procrastinationproject-c3be2.appspot.com",
  messagingSenderId: "307611369697",
  appId: "1:307611369697:web:730677a994072a11dd37a0",
};

firebase.initializeApp(firebaseConfig);
