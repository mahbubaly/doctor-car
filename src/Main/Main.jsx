import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Pages/Navbar/Navbar';



const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />

            <Footer />
        </div>
    );
};

export default Main;