import { signInWithGooglePopoup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopoup();
    console.log(response);
    // const googleSignIn = () => {
    //   const { user } = signInWithGooglePopup();
    //   console.log(user);
  };
  // return (
  //   <div>
  //     <h1>SignIn</h1>
  //     <button onClick={googleSignIn}>google sign in</button>
  //   </div>
  // );
};

export default SignIn;
