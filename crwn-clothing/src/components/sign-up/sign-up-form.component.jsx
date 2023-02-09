import { useState } from "react";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  return (
    <div>
      <h1>Sign up with your Email and Password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
