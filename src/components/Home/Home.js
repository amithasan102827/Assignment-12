import React from 'react';
import Cars from '../Cars/Cars';
import Footer from '../Footer/Footer';

import HomeBanner from '../HomeBanner/HomeBanner';


import NavigationBootstrap from '../NavigationBootstrap/NavigationBootstrap';
import Reviews from '../Reviews/Reviews';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
          
            {/* <NavigationBootstrap></NavigationBootstrap> */}
            <HomeBanner></HomeBanner>
            <Cars></Cars>
            <Reviews></Reviews>
            <WhyChooseUs></WhyChooseUs>
            {/* <Footer></Footer> */}
            
        </div>
    );
};

export default Home;