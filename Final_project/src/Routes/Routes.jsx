import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from '../App';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact'; 
import Blog from '../Pages/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: "/Home",
        element: <Home></Home>
      },
      {
        path: "/Service",
        element: <Service></Service>
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

export default router;