import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import "./sign-in.style.scss";
import Button from "../button/button";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

const defaultformFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-credential") {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
