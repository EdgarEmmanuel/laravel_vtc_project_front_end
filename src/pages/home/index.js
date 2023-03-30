import React from 'react';
import LandingPage from './LandingPage';
import HowItWorks from './HowItWorks';
import About from './About';
import BusinessPart from './BusinessPart';
import Footer from './Footer';
import PassengerAbout from './PassengerAbout';




const Home = () => {

    return (
        <div>
            <LandingPage/>
            <HowItWorks/>
            <About/>
            <PassengerAbout/>
            <BusinessPart/>
            <Footer/>
        </div>
    );
}


export default Home;