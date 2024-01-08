import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {auth} from '../utils/Firebase';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, PHOTOURL } from "../utils/constants";

const Login=()=>{
    const dispatch=useDispatch();
    const [issignin,setsignin]=useState(true);
    const [errormessage,seterrormessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    const handleToggle=()=>{
        setsignin(!issignin);
    }

    const handleValidate=()=>{
        const m=checkValidate(email.current.value,password.current.value);
        seterrormessage(m);
    
        if(m)return;//error then return

        if(!issignin){
            //Sign up Logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
                updateProfile(user, {
                   displayName: name.current.value, photoURL: PHOTOURL
                 }).then(() => {
                // Profile updated!
                // ...
                const {uid,email,displayName,photoURL} = auth.currentUser;//updated value
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                 }).catch((error) => {
                // An error occurred
               
                    seterrormessage(error.message);
                 });
            
           
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                seterrormessage(errorCode+"-"+errorMessage);
             });

        }else{
            //Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed in 
                 // const user = userCredential.user;
                // ...
             })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrormessage(errorCode+"-"+errorMessage);
             });

        }
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
            <img src={BG_URL}
            alt="logo"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}className="w-full md:w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{issignin?"Sign In":"Sign UP"}</h1>
                {!issignin&&<input ref={name} type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700" />}
                <input ref={email} type="email" placeholder="Email address" className="p-2 my-4 w-full bg-gray-700" />
                <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full  bg-gray-700" />
                <p className="text-red-500 py-4 font-bold text-lg">{errormessage}</p>
                 <button className="p-4 my-6 bg-red-700 w-full" onClick={handleValidate}>{issignin?"Sign In":"Sign Up"}</button>
                 <p className="py-4 cursor-pointer" onClick={handleToggle}>{issignin?"New to Netflix? Sign Up now":"Already Registered?Sign In"}</p>
            </form>

        </div>
    )
}
export default Login;

