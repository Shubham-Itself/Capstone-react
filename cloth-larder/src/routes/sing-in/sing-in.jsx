import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up-form/sign-up";
const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (user) {
      const userDocRef = createUserDocumentFromAuth(user);
    }
  };

  return (
    <>
      <div onClick={logGoogleUser}>sigin</div>
      <SignUp />
    </>
  );
};

export default SingIn;
