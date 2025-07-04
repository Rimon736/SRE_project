import React from 'react';
import Nav from '../components/nav.jsx';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;