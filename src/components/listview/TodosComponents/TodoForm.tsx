import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
interface TodoFormProps {
  addTask: (name: string) => void;
}
export const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    addTask(trimmedName);
    setName('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter a task"
        variant="outlined"
        value={name}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
};
