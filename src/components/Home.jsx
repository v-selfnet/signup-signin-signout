import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h3>Home: {user.dp}</h3>
        </div>
    );
};

export default Home;
