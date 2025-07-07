import React from 'react';
import {createBrowserRouter,} from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import DoctorsPage from "../Pages/DoctorsPage.jsx";
import DoctorsList from "../Pages/DoctorsList.jsx";
// import * as path from "node:path";
import Login from "../components/Login.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Signup from "../components/Signup.jsx";
import UsersPage from "../Pages/UsersPage.jsx";
import ShowUserInfo from "../components/ShowUserInfo.jsx";
import PrivateRoutes from "../Providers/PrivateRoutes.jsx";


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
        path: "/DoctorsPage",
        element: <PrivateRoutes>
          <DoctorsPage></DoctorsPage>
        </PrivateRoutes>
      },
      {
        path: "/DoctorsList",
        loader: () => fetch('http://localhost:3000/DoctorsPage'),
        element: <DoctorsList></DoctorsList>
      },
      {
        path: "/UserInfo",
        element: <UsersPage></UsersPage>
      },
      {
        path: `/MyInfo/:id`,
        loader: () => fetch('http://localhost:3000/UserInfo'),
        element: <ShowUserInfo></ShowUserInfo>
      }

    ]
  },
  {
    path: 'auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"Signup",
        element: <Signup></Signup>
      },
      {
        path:"Login",
        element:<Login></Login>
      }
    ]
  }
]);

export default router;