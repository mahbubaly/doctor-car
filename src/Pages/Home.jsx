import React from 'react';
import Banner from './Navbar/Banner';
import About from './About';
import Service from './Service/Service';
import TeamMember from './Team/TeamMember';
import Features from './Features/Features';
import CustomerReview from './CustomerReview/CustomerReview';



const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Service />
            <TeamMember />
            <Features />
            <CustomerReview />
        </div>
    );
};

export default Home;