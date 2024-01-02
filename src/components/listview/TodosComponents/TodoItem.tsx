import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';

const usePrevious = <T,>(value: T) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

interface TodoItemProps {
  id: string;
  name: string;
  completed: boolean;
  editTask: (id: string, newName: string) => void;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

  const editFieldRef = useRef<HTMLInputElement | null>(null);
  const editButtonRef = useRef<HTMLButtonElement | null>(null);

  const wasEditing = usePrevious(isEditing);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedNewName = newName.trim();

    if (!trimmedNewName) {
      return;
    }

    props.editTask(props.id, trimmedNewName);
    setNewName(trimmedNewName);
    setEditing(false);
  };

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current?.focus();
    }

    if (wasEditing && !isEditing) {
      editButtonRef.current?.focus();
    }
  }, [wasEditing, isEditing]);

  const editingTemplate = (
    <Card variant="outlined">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label={`New name for ${props.name}`}
            variant="outlined"
            value={newName}
            onChange={handleChange}
            inputRef={editFieldRef}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setEditing(false)}
        >
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </CardActions>
    </Card>
  );

  const viewTemplate = (
    <Card variant="outlined">
      <CardContent>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={props.completed}
              onChange={() => props.completeTask(props.id)}
            />
          }
          label={props.name}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <li className="todo-item">{isEditing ? editingTemplate : viewTemplate}</li>
  );
};
