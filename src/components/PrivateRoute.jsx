import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log('private route:', user)

    if(user){
        return children;
    }

    return <Navigate to='/signin' replace={true}></Navigate>
};

export default PrivateRoute;