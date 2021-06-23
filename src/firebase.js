import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEEJEp5j5yz_IpYLwsHxObcQOE0cWsuwo",
  authDomain: "hmboard-3ef20.firebaseapp.com",
  projectId: "hmboard-3ef20",
  storageBucket: "hmboard-3ef20.appspot.com",
  messagingSenderId: "620695420099",
  appId: "1:620695420099:web:bea7cd73d2c63d5e03b676",
  measurementId: "G-4B4MY7VZ4L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider, db };
