// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSfGvpI3FIuqzc5h_kh09eUXchTJ2Ujbg",
  authDomain: "project-disney-plus-app-1.firebaseapp.com",
  projectId: "project-disney-plus-app-1",
  storageBucket: "project-disney-plus-app-1.appspot.com",
  messagingSenderId: "598490589096",
  appId: "1:598490589096:web:9aae2e79ca0dcd87fe9f9d",
  measurementId: "G-WSJ9M68NWZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
