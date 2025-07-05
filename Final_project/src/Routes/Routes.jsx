import React from 'react';
import {createBrowserRouter,} from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Blog from '../Pages/Blog';
import DoctorsPage from "../Pages/DoctorsPage.jsx";


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
        element: <DoctorsPage></DoctorsPage>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

export default router;