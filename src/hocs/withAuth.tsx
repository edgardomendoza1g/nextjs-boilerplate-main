import { Box, LinearProgress } from "@mui/material";
import { useIsAuthenticated } from "hooks/useIsAuthenticated";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (Component) => {
   
    return (props) => {
        const isAuthenticated = useIsAuthenticated();
        const router = useRouter();
        const [isAuthChecked, setIsAuthChecked] = useState(false);

     

        useEffect(() => {
            const verifyAuthentication = async () => {
                return new Promise(resolve => setTimeout(resolve,750))
            }

            verifyAuthentication().then(() => {
                setIsAuthChecked(true);
            })
        }, []);

      
        
        useEffect(() => {
            if (!isAuthenticated && isAuthChecked && typeof window !=='undefined') {
                router.push('/')
            }
        }, [router, isAuthenticated,isAuthChecked]);

        if (!isAuthChecked) {
            return (<Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width:'100vw'
            }}>
                <LinearProgress sx={{ width:'50%'}} />
            </Box>)
        }

        return isAuthenticated ? <Component {...props} /> : null;

    }
}

export default withAuth;