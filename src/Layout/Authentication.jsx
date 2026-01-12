import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div className="bg-theme-primary min-h-screen transition-colors duration-300">
            <Navber></Navber>
            <Outlet>
                
            </Outlet>
            
        </div>
    );
};

export default Authentication;