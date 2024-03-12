import React, { useEffect } from 'react'
import { createBrowserRouter, useActionData } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import{auth} from '../Databse/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';



//an event listner onauthstatechanged is also here as it routes the user if he is already signed in and based on that 
//we add user to the store or remove the user from the store


const Body = () => {
    
    
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

   


  return (
    <div>
    <RouterProvider router ={appRouter}></RouterProvider>
    </div>
  )
}

export default Body;