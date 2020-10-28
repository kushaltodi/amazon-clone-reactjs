import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEbvHagHY4a4dxV94IlBpGOltpdVg6MBE",
  authDomain: "clone-8cc80.firebaseapp.com",
  databaseURL: "https://clone-8cc80.firebaseio.com",
  projectId: "clone-8cc80",
  storageBucket: "clone-8cc80.appspot.com",
  messagingSenderId: "868506530491",
  appId: "1:868506530491:web:2bea7029b2b331c4cfef9e",
  measurementId: "G-GG6QCKYBCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };