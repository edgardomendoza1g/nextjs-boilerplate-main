import { AuthError, InteractionType } from '@azure/msal-browser';
import { useMsal, useMsalAuthentication } from '@azure/msal-react';
import { useCallback, useState } from 'react';
type MsalRequest = {
  scopes: string[];
};

const useFetchWithMsal = (msalRequest: MsalRequest) => {
  const { instance } = useMsal();
  const [error, setError] = useState<AuthError | null>(null);
  const [data, setData] = useState(null);

  const { error: msalError, result } = useMsalAuthentication(
    InteractionType.Popup,
    {
      ...msalRequest,
      account: instance.getActiveAccount() ?? undefined,
      redirectUri: '/datagrid-with-filter/blog',
    }
  );

  const execute = useCallback(
    async (method: string, endpoint: string, data = null) => {
      if (msalError) {
        setError(msalError);
        return;
      }

      if (result) {
        try {
          let response = null;
          const headers = new Headers();
          const bearer = `Bearer ${result?.accessToken}`;

          headers.append('Authorization', bearer);
          if (data) headers.append('Content-Type', 'application/json');

          const options = {
            method: method,
            headers: headers,
            body: data ? JSON.stringify(data) : null,
          };

          response = await (await fetch(endpoint, options)).json();
          setData(response);
          return response;
        } catch (error) {
          setError(error as AuthError);
          throw error;
        }
      }
    },
    [msalError, result]
  );

  return {
    data,
    error,
    execute,
  };
};

export default useFetchWithMsal;
