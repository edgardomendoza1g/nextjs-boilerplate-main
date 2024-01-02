import { useCallback, useState } from 'react';

import { AccountInfo, AuthError, InteractionType } from '@azure/msal-browser'; // Import AccountInfo type
import { useMsal, useMsalAuthentication } from '@azure/msal-react';

interface MsalRequest {
  interactionType: InteractionType; // Specify the desired interaction type
  scopes: string[]; // Specify the scopes type
  redirectUri: string;
  // Add other properties as needed for your specific authentication flow
}

interface FetchResponse<T> {
  isLoading: boolean;
  error: AuthError | null; // Use AuthError type
  data: T | null;
  execute: (
    method: string,
    endpoint: string,
    requestData?: T | null
  ) => Promise<T | void>; // Specify requestData type
}

const useFetchWithMsal = <T>(msalRequest: MsalRequest): FetchResponse<T> => {
  const { instance } = useMsal();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null); // Use AuthError type
  const [data, setData] = useState<T | null>(null);

  const { result, error: msalError } = useMsalAuthentication(
    msalRequest.interactionType,
    {
      ...msalRequest,
      account: instance.getActiveAccount() as AccountInfo, // Specify AccountInfo type
    }
  );

  const execute = async (
    method: string,
    endpoint: string,
    requestData: T | null = null
  ): Promise<T | void> => {
    if (msalError) {
      setError(msalError);
      return;
    }

    if (result) {
      try {
        let response = null;

        const headers = new Headers();
        const bearer = `Bearer ${result.accessToken}`;
        headers.append('Authorization', bearer);

        if (requestData) headers.append('Content-Type', 'application/json');

        const options = {
          method: method,
          headers: headers,
          body: requestData ? JSON.stringify(requestData) : null,
        };

        setIsLoading(true);

        response = await (await fetch(endpoint, options)).json();
        setData(response);

        setIsLoading(false);
        return response;
      } catch (e) {
        setError(e as AuthError | null);
        setIsLoading(false);
        throw e;
      }
    }
  };

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, [result, msalError]),
  };
};

export default useFetchWithMsal;
