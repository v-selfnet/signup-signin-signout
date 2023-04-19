import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // signup
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // signin
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // show user information
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Rubel:', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe(); // stop observation
    }, []);

    // signout
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user, 
        loading,
        createUser, 
        signIn, 
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;