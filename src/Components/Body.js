import React, { useEffect } from 'react'
import { createBrowserRouter, useActionData } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import{auth} from '../Databse/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Store/userSlice';

//an event listner onauthstatechanged is also here as it routes the user if he is already signed in and based on that 
//we add user to the store or remove the user from the store
const Body = () => {
    const dispatch =useDispatch();
    
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse></Browse>
        },
        {
            path:"/Login",
            element:<Login/>
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              //user sign in case
              const {uid,email,displayName} = user.uid;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              

              // ...
            } else {
              // User is signed out
              dispatch(removeUser())
              
              // ...
            }
          });
    },[])



  return (
    <div>
    <RouterProvider router ={appRouter}></RouterProvider>
    </div>
  )
}

export default Body;