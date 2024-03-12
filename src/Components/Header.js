import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from "../Databse/FirebaseConfig";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Store/userSlice';
import { LOGO, USERICON } from '../utils/constants';
const Header = () => {
const navigate =useNavigate();
const dispatch=useDispatch();
  const handleSignOut=()=>{
    
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          //user sign in case
          const {uid,email,displayName} = user.uid;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          
          navigate("/browse");

          // ...
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
          
          // ...
        }
      });
   //clean up function -> unsubscribe when coomponent unmounts (good hygiene practice)
      return ()=>unsubscribe();
},[])

  return (
    
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className="w-44" src={LOGO}
        alt="img-logo"
        ></img>
   


    <div className='flex items-center mb-2'>
         <img className="mt-4  w-10 h-10"src={USERICON} alt="user-profile"></img>
         <button onClick={handleSignOut} className='bg-transparent text-white rounded w-16 h-8 mt-4 ml-2 box-border'>Sign Out</button>
    </div>
    </div>



    
  )
}

export default Header