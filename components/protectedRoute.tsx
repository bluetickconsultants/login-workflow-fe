'use client'
import { appConstants } from '@/utils/constants';
import { isProtectedRouteAuthenticated, isUserAuthenticated } from '@/utils/util';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';




const ProtectedRoute = ({ children }: any) => {

    const [isAuth, setIsAuth] = useState(false)
    const router = useRouter()

    useEffect(() => {
     const {isAuthenticated, token} = isProtectedRouteAuthenticated()
        if (!isAuthenticated) {
            window.location.href = '/signin';
        } else {
            if (token) {
                localStorage.setItem(appConstants.token, token)
                router.replace('/chatbot')
            }
        }
        setIsAuth(isUserAuthenticated())
    }, []);

    return isAuth ? children : null
};

export default ProtectedRoute;