import React from 'react';
import {createBrowserRouter,} from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import DoctorsPage from "../Pages/DoctorsPage.jsx";
import DoctorsList from "../Pages/DoctorsList.jsx";


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
        path: "/DoctorsList",
        loader: () => fetch('http://localhost:3000/DoctorsPage'),
        element: <DoctorsList></DoctorsList>
      }
    ]
  },
]);

export default router;