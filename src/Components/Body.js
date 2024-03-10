import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
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
    ])



  return (
    <div>
    <RouterProvider router ={appRouter}></RouterProvider>
    </div>
  )
}

export default Body;