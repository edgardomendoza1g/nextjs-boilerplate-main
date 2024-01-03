import { AuthError, InteractionType } from '@azure/msal-browser';
import { protectedResources } from 'azure-active-directory-b2c/config/authConfig';
import { ListView } from 'components/listview/ListView';
import useFetchWithMsal from 'hooks/useFetchWithMsal';
import { useEffect, useState } from 'react';

interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
  // Add other properties as needed
}

const TodoList = () => {
  const msalRequest = {
    interactionType: InteractionType.Popup,
    scopes: protectedResources.apiTodoList.scopes,
    redirectUri: 'datagrid-with-filter/blog',
  };

  const { error, execute } = useFetchWithMsal(msalRequest);

  const [todoListData, setTodoListData] = useState<TodoItem[]>([]);
  const [fetchError, setFetchError] = useState<AuthError | null>(null);

  useEffect(() => {
    if (todoListData && todoListData.length === 0) {
      execute('GET', protectedResources.apiTodoList.todoListEndpoint)
        .then((response: unknown) => {
          setTodoListData(response as TodoItem[]);
        })
        .catch((err: AuthError) => {
          setFetchError(err);
          // Set todoListData to an empty array or a default value
          setTodoListData([]); // or setTodoListData(defaultValue);
        });
    }
  }, [execute, todoListData]);

  if (fetchError) {
    return <div>Error: {fetchError.message}</div>;
  }

  return <>{todoListData ? <ListView todoListData={todoListData} /> : null}</>;
};

export default TodoList;
