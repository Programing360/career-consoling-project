import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import { authProvider } from './firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContextData = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    // setError('')

    const userLogin = (email, password) => {
        return createUserWithEmailAndPassword(authProvider, email, password)
    }

    const UserSignIn = (email, password) => {
      
        
        return signInWithEmailAndPassword(authProvider, email, password)
    }

    const userSignWithGoogle = () => {

        const provider = new GoogleAuthProvider()
        return signInWithPopup(authProvider, provider)
    }

    useEffect(() => {
     const unSubscribe = onAuthStateChanged(authProvider, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unSubscribe
        }
    }, [])

    const userSignOut = () => {
        return signOut(authProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(authProvider, (user) => {
            setUser(user)
            console.log(user)
        })
        return () => {
            unSubscribe
        }
    }, [])

    const data = {
        userLogin,
        userSignWithGoogle,
        userSignOut,
        UserSignIn,
        user,
        setUser,
        setError,
        error,
        loading
    }
    return (
        <AuthContextData.Provider value={data}>
            {children}
        </AuthContextData.Provider>
    );
};

export default AuthProvider;