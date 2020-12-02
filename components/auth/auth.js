import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Adminlog from './login'

//api here is an axios instance which has the baseURL set according to the env.
import api from './api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const current = Cookies.get('user')
            if (current) {
                const user = JSON.parse(Cookies.get('user'))
                if (user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated, isLoading } = useAuth();
    if (isLoading || (!isAuthenticated)){
      return <Adminlog/>; 
    }
    return children;
};