import { useMsal } from '@azure/msal-react';
// @mui
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
// authConfig
import { loginRequest } from 'azure-active-directory-b2c/config/authConfig'; // hooks
import Iconify from 'components/ui/iconify/Iconify';
import useResponsive from '../hooks/useResponsive';

const StyledBox = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f3f3f3',
  background: 'url(/assets/images/backgroundLogin.jpeg)',
});

const LoginCard = styled(Box)({
  width: '80%',
  height: '75%',
  padding: 0,
  margin: 0,
  backgroundColor: 'white',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '18px',
  borderColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
});

const Login = () => {
  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(850));
  const { instance } = useMsal();

  const handleLoginPopup = () => {
    /**
     * When using popup and silent APIs, we recommend setting the redirectUri to a blank page or a page
     * that does not implement MSAL. Keep in mind that all redirect routes must be registered with the application
     * For more information, please follow this link: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/login-user.md#redirecturi-considerations
     */
    instance
      .loginPopup({
        ...loginRequest,
        redirectUri: '/datagrid-with-filter/blog',
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
     

      <StyledBox>
        <Box
          sx={{
            width: isMobile ? '95%' : '60%',
            height: isMobile ? '95%' : '80%',
            padding: '0rem',
            margin: 0,
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '18px',
            borderColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div
            style={{
              background: 'url(/assets/images/side-background-login.png) no-repeat center/cover',
              height: isMobile ? '20%' : '100%',
              width: isMobile ? '100%' : '40%',
              margin: 0,
              padding: 0,
              borderTopLeftRadius: isMobile ? '18px' : '18px',
              borderBottomLeftRadius: isMobile ? '0px' : '18px',
              borderTopRightRadius: isMobile ? '18px' : '0px',
              objectFit: 'cover',
              alignSelf: 'center',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: isMobile ? '80%' : '100%',
              width: isMobile ? '100%' : '65%',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              borderColor: 'red',
              borderStyle: 'solid',
              borderWidth: 0,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '20%',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderWidth: 0,
              }}
            >
              <div
                style={{
                  background: 'url(/assets/logos/logos.svg) no-repeat center/contain',
                  width: '60%',
                  height: '60%',
                  margin: 0,
                  padding: 0,
                  borderStyle: 'solid',
                  borderWidth: 0,
                }}
              />
            </Box>

            <Box
              sx={{
                width: '90%',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                alignContent: 'center',
                borderColor: 'red',
                margin: 0,
                padding: 0,
                borderStyle: 'solid',
                borderWidth: 0,
              }}
            >
              <Typography variant="h4" gutterBottom textAlign={'center'}>
                ¡Bienvenido a vERP Web!
              </Typography>
              <Typography variant="body2" gutterBottom textAlign={'center'}>
                A continuacion presiona el boton para iniciar sesion con Microsoft Outlook
              </Typography>
          
              <Button variant="contained" color="primary" size="large"  fullWidth onClick={handleLoginPopup} endIcon={ <Iconify icon="fa-brands:windows" />}>
                Iniciar Sesión   
              </Button>

              <Box
                mt={2}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignContent: 'space-around',
                  alignItems: 'center',
                  borderColor: 'green',
                }}
              >
                <Typography variant="body1" mb={1} textAlign={'center'}>
                  <IconButton color="primary" size="small">
                    <VpnKeyIcon />
                  </IconButton>
                  <span style={{ textDecoration: 'underline' }}>Recuperar contraseña</span>
                </Typography>

                <Typography variant="body1" mb={1} textAlign={'center'}>
                  <IconButton color="primary" size="small">
                    <LockOpenIcon />
                  </IconButton>
                  <span style={{ textDecoration: 'underline' }}>Desbloquear usuario</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledBox>
    </>
  );
};

export default Login;
