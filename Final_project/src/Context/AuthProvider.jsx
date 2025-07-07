// AuthProvider.jsx
import React, {useEffect, useState} from 'react';
import {AuthContext} from './AuthContext';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {app} from '../Firebase/firebase.init.js';

const auth = getAuth(app)

export default function AuthProvider({ children }) {

    const [user, setUser] =useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth ,email, password);
    }

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth ,email, password);
    }

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSub()
    })

    const userInfo ={
        createUser,
        SignInUser,
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
}
