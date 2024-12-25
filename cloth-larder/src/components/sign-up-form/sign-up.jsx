import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import "./sign-up.style.scss";
import Button from "../button/button";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };
  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      if (user) {
        alert("Account Created Successfully");
      }
      resetFormFields();
    } catch (error) {
      console.log("error while creating user", error);
      if (error.code === "auth/email-already-in-use") {
        alert("User already exist");
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h1>Do not have an account?</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChanges}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChanges}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChanges}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          onChange={handleChanges}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
