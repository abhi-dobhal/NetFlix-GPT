import { useState ,useRef} from "react";
import Header from "./Header";
import "../utils/Validate"
import { CheckValidateData } from "../utils/Validate";
import {auth} from "../Databse/FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


//This form of login involves the sign up and sign in form using usestate and conditional rendering
//short-circuting feature is also there
//for form try to use libraries such as formik
//in utils->validate.js->it validates the email and password
//email and password are taken from input from user using -> useState or useRef(we have used useref)
//created a useState for handling error
//used firebase to authenicate the user -firebase documentation







const Login=()=>{
 const [isSignInForm,setIsSignForm]=useState(true);
 const [errormessage,setErrormeesage]=useState()
//const name=useRef(null);
 const email=useRef(null);
 const password=useRef(null);
 const name=useRef();
 const navigate=useNavigate();  //given by react router so that we navigate to a certain route
    const toggleSignInForm=()=>{
            setIsSignForm(!isSignInForm)
    }

    const handlebuttonclick=()=>{
//passing values of email and password to checkvalidate data as useRef returns an object and that object has a current field 
   
   const message =CheckValidateData(email.current.value,password.current.value);
   setErrormeesage(message)

   //create user only when error message is null means no error is there

    if(message ) return; //return if error is there 

    //sign in sign up logic

    if(!isSignInForm){
        //sign up logic
        createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormeesage(errorCode + 
        "-"+ errorMessage);
    // ..
  });

    }

    else{
        //sign in logic
        signInWithEmailAndPassword( auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormeesage(errorCode + "-" + errorMessage);
  });
    }


    }


    return(
        <div >
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="img-logo"
            ></img>
            </div>
            
            <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 mx-auto right-0 left-0 my-36 bg-black bg-opacity-80 w-3/12 overflow-hidden">
                <h1 className="text-white text-3xl font-bold font-sans mb-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&(<input ref={name} type="text" placeholder="Full Name" className="w-64 p-2 m-auto mb-10 bg-gray-700 border-rose-200"></input>)}
                <input 
                ref={email}
                type="text" 
                placeholder="Email Address" 
                className="w-64 p-2 m-auto mb-10 bg-gray-700 border-rose-200">

                </input>
                <input ref={password} type="password" placeholder="Enter Password" className=" w-64 p-2 m-auto bg-gray-700 border-white"></input>
               <p className="text-red-900 m-2 font-bold">{errormessage}</p>
                <button className=" text-center flex p-2 pl-28  mt-8 mr-2 rounded bg-red-800 w-64 text-white " onClick={handlebuttonclick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-white mt-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already a member?Sign In"}</p>
            
            </form>
        </div>
    )
}

export default Login;

