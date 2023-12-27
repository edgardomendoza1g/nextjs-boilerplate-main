import { useMsal } from '@azure/msal-react';

export const useIsAuthenticated = (): boolean => {
  const { accounts } = useMsal();

  return accounts.length > 0;
};
