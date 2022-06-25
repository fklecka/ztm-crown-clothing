import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAjT4zjHlMGxGzC3I2d0_KguR1fqrZrI8",
  authDomain: "crwn-clothing-db-71413.firebaseapp.com",
  projectId: "crwn-clothing-db-71413",
  storageBucket: "crwn-clothing-db-71413.appspot.com",
  messagingSenderId: "238852271901",
  appId: "1:238852271901:web:b8a6b3737d1f6b6012fbf4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
