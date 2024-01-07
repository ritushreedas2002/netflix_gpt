import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header=()=>{
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user)
    const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const handleGptSearchClick=()=>{
        //toggle
        dispatch(toggleGptSearchView())
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
      };

    //UseEffect should load once not everytime ,so []
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              // ...
              navigate("/browse");
            } else {
                //Sign out
              dispatch(removeUser());
              navigate("/");
            }
          });

          return ()=>unsubscribe()
    },[])
    return (
        <div className="absolute w-screen  px-8 py-3 bg-gradient-to-b from-black z-20 flex  justify-between">
            
           
            <img  className="w-44"src={LOGO} alt="logo"/>
            {user &&( <div className="flex p-2">
            {showGptSearch && (
            <select 
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
                <button className="rounded-lg my-2  py-2 px-4 m-2 mx-4 bg-purple-800 text-white" onClick={handleGptSearchClick}>{showGptSearch?"Homepage":"GPT Search"}</button>
                <img className="w-30 h-20" src={user.photoURL} alt="user-icon"/>
                <button className= "text-white text-bold p-2" onClick={handleSignOut}>Sign Out</button>
            </div>)} 
            
        </div>
    )
}
export default Header;