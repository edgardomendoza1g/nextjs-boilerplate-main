import { InteractionType } from "@azure/msal-browser";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { useCallback, useState } from "react";


const useFetchWithMsal = (msalRequest: any) => {
    const { instance } = useMsal();
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const { error: msalError, result } = useMsalAuthentication(InteractionType.Popup, {
        ...msalRequest,
        account: instance.getActiveAccount(),
        redirectUri: '/datagrid-with-filter/blog'
    });


    const execute = async (method: string, endpoint: string, data = null) => {
        
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
                setError(error);
                throw error;
                
            }

        }

        return {
            data,
            error,
            execute: useCallback(execute, [result, msalError]),
        };


    };
    

};

export default useFetchWithMsal;