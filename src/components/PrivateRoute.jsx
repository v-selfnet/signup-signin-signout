import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log('private route:', user)

    // loading stop route page signin
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user){
        return children;
    }

    return <Navigate to='/signin' replace={true}></Navigate>
};

export default PrivateRoute;