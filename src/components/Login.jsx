import React, { useRef, useState } from "react";
import Header from "./Header";
import { validData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";
import { DEFAULT_AVATAR } from "./utils/constants";

const Login = () => {
  const [isSignInOff, setIsSignInOff] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const validationHandler = () => {
    const message = validData(
      email.current.value,
      password.current.value
      // username.current.value
    );
    setErrorMessage(message);
  
    if (message) return;

    if (!isSignInOff) {
      //Sign up will apperar
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up logic
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: DEFAULT_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const signInOffToggler = () => {
    setIsSignInOff(!isSignInOff);
  };

  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          className="bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="not found"
        />
      </div>

      <div className="relative top-20 left-1/3 w-[35vw] h-[105vh] bg-black opacity-90 rounded-xl">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center text-white flex-col gap-11"
        >
          <h1 className="text-3xl mt-16 mr-48  -mb-4 font-semibold ">
            {isSignInOff ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInOff && (
            <input
              type="text"
              ref={username}
              className="w-72 h-11  border border-slate-400 p-2 focus:border-transparent  text-sm rounded-[4px] pl-4 bg-transparent text-white"
              placeholder="Username"
            />
          )}
          <input
            type="text"
            ref={email}
            className="w-72 h-11  -mt-4 border border-slate-400 p-2 focus:border-transparent  text-sm rounded-[4px] pl-4 bg-transparent text-white"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            ref={password}
            className="w-72 h-11 -mt-4  border border-slate-400 p-2 focus:border-transparent  text-sm rounded-[4px] pl-4 bg-transparent text-white"
            placeholder="Password"
          />

          <p className="text-red-500 font-semibold w-2/3 text-sm -mt-6 ">
            {errorMessage}
          </p>

          <button
            className="w-72 h-11 bg-red-900 rounded-md font-semibold -mt-5 text-white"
            onClick={validationHandler}
          >
            {isSignInOff ? "Sign In" : "Sign Up"}
          </button>
          <h4 className="text-slate-600 font-semibold -mt-7">OR</h4>
          {isSignInOff && (
            <button className="w-72 h-11 bg-slate-400 bg-opacity-40 font-semibold rounded-md -mt-7 text-white  ">
              Use a sign-in code
            </button>
          )}
          <button className="-mt-5 hover:text-slate-500 hover:underline transition ease-in duration-300">
            Forgot-passoword?
          </button>

          <p className="mr-20 -mt-6 font-medium text-slate-500">
            {isSignInOff ? "New to Netflix?" : "Already have an Account?"}

            <span
              onClick={signInOffToggler}
              className="text-white hover:cursor-pointer font-semibold ml-2"
            >
              {isSignInOff ? "Sign up now." : "Sign in now."}
            </span>
          </p>

          <p className=" w-[30vw] -mt-6 ml-20 font-medium text-[1vw] text-slate-500">
            This page is protected by Google reCAPTCHA to <br></br>ensure you're
            not a bot.{" "}
            <span className="text-blue-700 underline hover:cursor-pointer">
              Learn more.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
