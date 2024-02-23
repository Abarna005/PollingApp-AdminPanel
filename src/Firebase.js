import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  // apiKey: "AIzaSyCUD1jUn8pnhfpbCho8o0-50QvKmlU1XVk",
  // authDomain: "login-51873.firebaseapp.com",
  // projectId: "login-51873",
  // storageBucket: "login-51873.appspot.com",
  // messagingSenderId: "609079612583",
  // appId: "1:609079612583:web:faf84da422882360ac3782",
  // measurementId: "G-PBG9J7PEYR",
  apiKey: "AIzaSyC-i3RjVsgeqnC8RW3ccMWY3oHZ5bZvIA8",
  authDomain: "pollingapp-ec901.firebaseapp.com",
  databaseURL: "https://pollingapp-ec901-default-rtdb.firebaseio.com",
  projectId: "pollingapp-ec901",
  storageBucket: "pollingapp-ec901.appspot.com",
  messagingSenderId: "97870286922",
  appId: "1:97870286922:web:ced1ac281dd220097f56b3",
  measurementId: "G-7SPH9KN0MX",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db=getDatabase(app);

