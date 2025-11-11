import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader';

const PrivateRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    
    if(loader){
        return <Loader></Loader>
    }

    if(user){
        return children;
    }

    return <Navigate state={location?.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;