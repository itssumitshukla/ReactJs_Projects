import {
  signInWithGooglePopup,
  signInWithRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const redirectGoogleResult = async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
  };

  useEffect(() => {
    redirectGoogleResult();
  }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleUser}>Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;
