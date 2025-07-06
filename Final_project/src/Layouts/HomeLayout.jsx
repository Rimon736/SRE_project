import React from 'react';
import Nav from '../components/nav.jsx';
import {Outlet} from 'react-router';
import Footer from '../components/Footer.jsx';

const HomeLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;