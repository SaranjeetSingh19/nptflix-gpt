import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "./utils/constants";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";
import lang from "./utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const langKey = useSelector((store) => store.config.lang)

  

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <Link to="/browse">
        {" "}
        <img className="w-36 mx-auto md:mx-0" src={LOGO} alt="logo" />{" "}
      </Link>
      {user && (
        <div className="flex p-2">
          <div>
            <select
            onChange={handleLanguageChange}
              className="w-30 mr-4
            px-3
            py-1
            transition ease-in duration-200
            text-gray-300
            bg-gray-900
            rounded-md
            border
            border-gray-700
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 cursor-pointer appearance-none
            hover:bg-gray-800"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  className="text-gray-200 hover:text-gray-300 cursor-pointer"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select> 
            
            <button
              onClick={handleGptSearchClick}
              className="bg-gray-900 hover:bg-gray-800 transition ease-in duration-200 mr-7 rounded-lg text-sm font-medium px-3 py-2 text-white mt-1"
            >
              {showGptSearch ? lang[langKey].homePageButton : lang[langKey].gptSearchButton }
            </button>
          </div>
          <img
            className="hidden md:block w-10 rounded-sm mr-4 h-10"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
