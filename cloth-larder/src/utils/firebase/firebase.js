import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPARQQyZ5WH9vSeJqYbozcng9hTzplduw",
  authDomain: "clothing-db-29945.firebaseapp.com",
  projectId: "clothing-db-29945",
  storageBucket: "clothing-db-29945.firebasestorage.app",
  messagingSenderId: "81775057332",
  appId: "1:81775057332:web:970aba36b45f4629853ae1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //   console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  //   console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return userDocRef;

  //   if user data exists

  // if user data doesn't exists
  // create / set the document with the data from userAuth in my collection

  //   return userDocRef
};
