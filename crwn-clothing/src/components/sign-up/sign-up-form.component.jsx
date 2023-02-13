import { async } from "@firebase/util";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesnt not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await { displayName };
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user,email already in use");
      } else {
        console.log(error + " user created and encounter an error");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <FormInput
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <FormInput
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <FormInput
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
