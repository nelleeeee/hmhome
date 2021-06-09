import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_oejf1FEGh3H-lU9P7lkw2RImx0CpL2I",
  authDomain: "hmhome-30ed7.firebaseapp.com",
  projectId: "hmhome-30ed7",
  storageBucket: "hmhome-30ed7.appspot.com",
  messagingSenderId: "979174443811",
  appId: "1:979174443811:web:766eaa57a94fe08a8b1a96",
  measurementId: "G-R3CB8RSX5K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider, db };
