import { isUserAuthenticated } from '@/utils/util';
import { useEffect } from 'react';



const ProtectedRoute = ({ children }: any) => {

    const isAuthenticated = isUserAuthenticated()

    useEffect(() => {
       
        if (!isAuthenticated) {
            window.location.href = '/signin';
        }
    }, []);

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;