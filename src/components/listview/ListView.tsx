import { InteractionType } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import List from '@mui/material/List';
import { protectedResources } from 'azure-active-directory-b2c/config/authConfig';
import useFetchWithMsal from 'hooks/useFetchWithMsal';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import { TodoForm } from './TodosComponents/TodoForm';
import { TodoItem } from './TodosComponents/TodoItem';

function usePrevious<T>(value: T) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
  // Add other properties if needed
}

interface ApiResponse {
  status: number; // HTTP status code
}
interface ListViewProps {
  todoListData: TodoItem[]; // Replace 'TodoItem[]' with the actual type
}

export const ListView: React.FC<ListViewProps> = (props) => {
  const { instance } = useMsal();
  const account = instance.getActiveAccount();
  const msalRequest = {
    interactionType: InteractionType.Popup, // Specify the desired interaction type
    scopes: protectedResources.apiTodoList.scopes, // Replace with your actual scopes
    redirectUri: 'datagrid-with-filter/blog', // Replace with your actual redirectUri
    // Add other properties as needed for your specific authentication flow
  };

  const { error, execute } = useFetchWithMsal<ApiResponse>(msalRequest); // Specify ApiResponse as the generic type

  const [tasks, setTasks] = useState(props.todoListData);

  const handleCompleteTask = (id: string) => {
    const updatedTask = tasks.find((task) => id === task.id);
    if (updatedTask) {
      const updatedTaskCopy = { ...updatedTask } as TodoItem;

      // Use a double assertion to assert that updatedTaskCopy is not null or undefined
      (updatedTaskCopy as NonNullable<TodoItem>).completed =
        !updatedTaskCopy.completed;

      const updatedTaskForApi: ApiResponse = {
        status: 200, // Set the desired HTTP status code for success
      };

      execute(
        'PUT',
        `${protectedResources.apiTodoList.todoListEndpoint}/${id}`,
        updatedTaskForApi // Pass the ApiResponse object
      ).then(() => {
        const updatedTasks = tasks.map((task) => {
          if (id === task.id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTasks(updatedTasks);
      });
    }
  };

  const handleAddTask = (name: string) => {
    const newTask = {
      owner: account?.idTokenClaims?.oid,
      id: nanoid(),
      name: name,
      completed: false,
    };

    const newTaskForApi: ApiResponse = {
      status: 200, // Set the desired HTTP status code for success
    };

    execute(
      'POST',
      protectedResources.apiTodoList.todoListEndpoint,
      newTaskForApi // Pass the ApiResponse object
    ).then((response) => {
      const typedResponse = response; // Type assertion
      if (typedResponse && typedResponse.status === 200) {
        setTasks([...tasks, newTask]);
      }
    });
  };

  const handleDeleteTask = (id: string) => {
    execute(
      'DELETE',
      `${protectedResources.apiTodoList.todoListEndpoint}/${id}`
    ).then((response) => {
      if (response && response.status === 200) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
      }
    });
  };

  const handleEditTask = (id: string, newName: string) => {
    const updatedTask = tasks.find((task) => id === task.id);
    if (updatedTask) {
      updatedTask.name = newName;

      const updatedTaskForApi: ApiResponse = {
        status: 200, // Set the desired HTTP status code for success
      };

      execute(
        'PUT',
        `${protectedResources.apiTodoList.todoListEndpoint}/${id}`,
        updatedTaskForApi // Pass the ApiResponse object
      ).then(() => {
        const updatedTasks = tasks.map((task) => {
          if (id === task.id) {
            return { ...task, name: newName };
          }
          return task;
        });
        setTasks(updatedTasks);
      });
    }
  };

  const taskList = tasks.map((task) => (
    <TodoItem
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      completeTask={handleCompleteTask}
      deleteTask={handleDeleteTask}
      editTask={handleEditTask}
    />
  ));

  const listHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const prevTaskLength = usePrevious(tasks.length) ?? 0;

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current?.focus();
    }
  }, [tasks.length, prevTaskLength]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="data-area-div">
      <TodoForm addTask={handleAddTask} />
      <h2 id="list-heading" tabIndex={-1} ref={listHeadingRef}></h2>
      <List className="todo-list">{taskList}</List>
    </div>
  );
};
