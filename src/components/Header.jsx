import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { NETFLIX_LOGO } from './utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const user = useSelector(store => store.user)
  
  const handleSignOut = () => {
 signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
    
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    })

    //So everytime component gets Unmounts
    return () => unSubscribe();
  }, []);
  
  return (
    <div className='absolute w-full z-10'>
      <div className='header-div flex justify-around px-6 bg-gradient-to-b from-black '>
        <img className='netflix-logo w-32 mr-[70vw]' src={NETFLIX_LOGO} alt="logo  found" />
      { user && ( <>
       <img className='netflix-smiley w-10 h-10 mt-4 ml-14' src={user?.photoURL} alt="not-Found" />
           <img  onClick={handleSignOut}
           className='logout-btn w-7 h-7 mt-6 cursor-pointer hover:bg-gray-600  hover:rounded-md transition ease-in duration-200' src="https://imgs.search.brave.com/_ja2UgKz1UMy9EldopqkHLucTqrsVbKEaujSBTY8ouc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8xMjYyNjMxLTIw/MC5wbmc" alt="" />
 </> ) }
      </div>
    </div>
  )
}

export default Header
