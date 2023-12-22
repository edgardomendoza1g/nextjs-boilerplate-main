/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from '@azure/msal-browser';

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */

export const msalConfig = {
  auth: {
    clientId: "9e948e62-d468-4d5f-9924-8d03ca3038b3", // Client ID de la app  ó clientId: process.env.REACT_APP_CLIENT_ID, authority: process.env.REACT_APP_AUTHORITY,
    authority: 'https://login.microsoftonline.com/c9684302-1260-42f0-865b-db7c0734b5dd', // Defaults to "https://login.microsoftonline.com/common"
    redirectUri: 'https://localhost:5000/datagrid-with-filter/blog', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
    clientCapabilities: ['CP1'], // this lets the resource owner know that this client is capable of handling claims challenge.
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            break;

          default:
            break;
        }
      },
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const protectedResources = {
  apiTodoList: {
      todoListBaseAddress: 'https://localhost:44332',
      todoListEndpoint: 'http://localhost:44332/api/todolist',
      scopes: ['api://53d06a03-84a3-4f19-9307-2c825d89506b/api.access'],
  },
};

/**
* Scopes you add here will be prompted for user consent during sign-in.
* By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
* For more information about OIDC scopes, visit: 
* https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
*/
export const loginRequest = {
  scopes: [...protectedResources.apiTodoList.scopes],
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  meMessagesEndpoint: 'https://graph.microsoft.com/v1.0/me/messages',
  mePhotoEndpoint: 'https://graph.microsoft.com/v1.0/me/photo/$value',
  me: 'https://graph.microsoft.com/v1.0/me',
  // Puedes agregar más endpoints según lo necesites
};
