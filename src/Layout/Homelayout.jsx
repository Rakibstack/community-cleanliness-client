import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Homelayout = () => {
    return (
        <div className="bg-theme-primary min-h-screen transition-colors duration-300">
            <title>CleanZone Report Home Pages</title>
            
             <Navber></Navber>
             <Outlet>

             </Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Homelayout;