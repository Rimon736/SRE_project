import React from 'react';
import Hero from '../components/Hero.jsx';
import FAQ from '../components/FAQ.jsx';
import Carousal from '../components/Carousal.jsx';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Carousal></Carousal>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;