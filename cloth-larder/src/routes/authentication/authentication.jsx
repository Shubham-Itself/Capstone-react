import React from "react";

import SignUp from "../../components/sign-up-form/sign-up";
import SignIn from "../../components/sign-in-form/sign-in";
import "./authentication.style.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
