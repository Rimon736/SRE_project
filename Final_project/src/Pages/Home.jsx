import React from 'react';
import Hero from '../components/Hero.jsx';
import Search from '../components/Search.jsx';
import Footer from '../components/Footer.jsx';
import FAQ from '../components/FAQ.jsx';
import Carousal from '../components/Carousal.jsx';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Carousal></Carousal>
            <Search></Search>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;