import { GraphResponse } from 'domain/interfaces/GraphResponse';

export const callMsGraph = async (
  accessToken: string,
  endpoint: string
): Promise<GraphResponse> => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);

  const options = {
    method: 'GET',
    headers: headers,
  };

  try {
    const response = await fetch(endpoint, options);
    const data: GraphResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
