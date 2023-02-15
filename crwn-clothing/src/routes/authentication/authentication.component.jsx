import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";
const Authentication = () => {
  const redirectGoogleResult = async () => {
    const response = await redirectGoogleResult();
    console.log(response);
  };
const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};


export default Authentication;
