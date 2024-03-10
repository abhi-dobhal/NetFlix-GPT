import { useState } from "react";
import Header from "./Header";

//This form of login involves the sign up and sign in form using usestate and conditional rendering
//short-circuting feature is also there
//for form try to use libraries such as formik
const Login=()=>{
 const [isSignInForm,setIsSignForm]=useState(true)
    const toggleSignInForm=()=>{
            setIsSignForm(!isSignInForm)
    }



    return(
        <div >
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="img-logo"
            ></img>
            </div>
            
            <form className="absolute p-12 mx-auto right-0 left-0 my-36 bg-black bg-opacity-80 w-3/12 overflow-hidden">
                <h1 className="text-white text-3xl font-bold font-sans mb-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&(<input type="text" placeholder="Full Name" className="w-64 p-2 m-auto mb-10 bg-gray-700 border-rose-200"></input>)}
                <input type="text" placeholder="Email Address" className="w-64 p-2 m-auto mb-10 bg-gray-700 border-rose-200"></input>
                <input type="password" placeholder="Enter Password" className=" w-64 p-2 m-auto bg-gray-700 border-white"></input>
                <button className=" text-center flex p-2 pl-28  mt-8 mr-2 rounded bg-red-800 w-64 text-white ">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-white mt-4 cursor-pointer " onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already a member?Sign In"}</p>
            
            </form>
        </div>
    )
}

export default Login;

