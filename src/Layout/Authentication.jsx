import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet>
                
            </Outlet>
            
        </div>
    );
};

export default Authentication;