import {
  AuthenticationResult,
  EventType,
  PublicClientApplication,
} from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/utils';
import CssBaseline from '@mui/material/CssBaseline';
import type { Theme } from '@mui/material/styles';
import { createTheme, styled } from '@mui/material/styles';
import ThemeProvider from '@mui/system/ThemeProvider';
import { msalConfig } from 'azure-active-directory-b2c/config/authConfig';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FunctionComponent, PropsWithChildren } from 'react';
import 'styles/globals.css';
import lightThemeOptions from 'styles/lightThemeOptions';
import GlobalStyles from 'theme/globalStyles';
import createEmotionCache from 'utility/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const msalInstance = new PublicClientApplication(msalConfig);
console.log('instancia de msal', msalInstance);

if (
  !msalInstance.getActiveAccount() &&
  msalInstance.getAllAccounts().length > 0
) {
  console.log('si no hay ningunacuenta activa , aqui la setearemos');
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
  console.log('el evento sucede');
  console.log(event);
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    if ((event.payload as AuthenticationResult).account) {
      const account = (event.payload as AuthenticationResult).account;
      msalInstance.setActiveAccount(account);
      console.log('Loggin success trigerred');
      console.log(account);

      window.location.href = '/datagrid-with-filter/blog';
    }
  }

  if (event.eventType === EventType.LOGOUT_SUCCESS) {
    if (msalInstance.getAllAccounts().length > 0) {
      msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    }
    console.log('log out success trigerred');
  }
});

const clientSideEmotionCache: EmotionCache = createEmotionCache();

const lightTheme: Theme = createTheme(lightThemeOptions);

const Main = styled('main', {
  shouldForwardProp: (prop: PropertyKey) => prop !== 'open',
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: '100vh',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const MyApp: FunctionComponent<MyAppProps> = (
  props: PropsWithChildren<MyAppProps>
) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Main>
          <GlobalStyles />
          <MsalProvider instance={msalInstance}>
            <Component {...pageProps} />
          </MsalProvider>
        </Main>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
