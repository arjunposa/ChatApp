
import { auth, provider, fbProvider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import Login from "./Login.jsx"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithFacebook = async() => {
   try {
    const faceBook = await signInWithPopup (auth, fbProvider);
    cookies.set("auth-token", faceBook.user.refreshToken);
    setIsAuth(true);
    console.log(faceBook);
   } catch (err) {
    console.error(err);
   }
  }
  return (
    <div className="auth">
      <div className="login">
        <Login/>
      </div>
      <div className="btns">
      <button onClick={signInWithGoogle} className="btn"> <FcGoogle size={"30px"}/>  </button>
      <button 
      className="btn"
      onClick={signInWithFacebook}> <BsFacebook size={"30px"} color="blue"/> </button>
      </div>
    </div>
  );
};