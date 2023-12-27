import { Box, LinearProgress } from '@mui/material';
import { useIsAuthenticated } from 'hooks/useIsAuthenticated';
import { useRouter } from 'next/router';
import React, { ComponentType, useEffect, useState } from 'react';

const withAuth = <P extends object>(Component: ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const isAuthenticated = useIsAuthenticated();
    const router = useRouter();
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
      const verifyAuthentication = async () => {
        return new Promise((resolve) => setTimeout(resolve, 750));
      };

      verifyAuthentication().then(() => {
        setIsAuthChecked(true);
      });
    }, []);

    useEffect(() => {
      if (!isAuthenticated && isAuthChecked && typeof window !== 'undefined') {
        router.push('/');
      }
    }, [router, isAuthenticated, isAuthChecked]);

    if (!isAuthChecked) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}
        >
          <LinearProgress sx={{ width: '50%' }} />
        </Box>
      );
    }

    return isAuthenticated ? <Component {...props} /> : null;
  };

  AuthenticatedComponent.displayName = `WithAuth(${
    Component.displayName || Component.name || 'Component'
  })`;
  return AuthenticatedComponent;
};

export default withAuth;
