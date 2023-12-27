import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { CustomBreadcrumbs } from 'components/breadcrumbs/CustomBreadcrumbs';
import DashboardLayout from 'components/layouts/Layout';
import { useState } from 'react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: string;
  dueDate: string;
  description: string;
}

const TodoListView = () => {
  const [todos, setTodos] = useState([
    {
      id: '221sdd',
      text: 'Task 1',
      completed: false,
      priority: 'Medium',
      dueDate: '2023-01-01',
      description: 'Description for Task 1',
    },
    {
      id: '221sd2d',
      text: 'Task 2',
      completed: true,
      priority: 'High',
      dueDate: '2023-01-02',
      description: 'Description for Task 2',
    },
  ]);
  // Resto del código...

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState<Task | null>(null);

  const handleDelete = (id: string) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const handleEdit = (task: Task) => {
    setEditTask(task);
    setOpen(true);
  };

  const handleAddTask = () => {
    setTodos([
      ...todos,
      {
        id: 'dsd',
        text: newTask,
        completed: true,
        priority: 'Medium',
        dueDate: '',
        description: '',
      },
    ]);
    setNewTask('');
    setOpen(false);
  };

  const handleUpdateTask = () => {
    if (editTask) {
      setTodos(
        todos.map((task: Task) =>
          task.id === editTask.id ? { ...task, ...editTask } : task
        )
      );
    }

    setOpen(false);
  };

  const columns = [
    { field: 'text', headerName: 'Task', width: 150 },
    { field: 'priority', headerName: 'Priority', width: 120 },
    { field: 'dueDate', headerName: 'Due Date', width: 120 },
    { field: 'description', headerName: 'Description', width: 300 },
    // Columna de acciones...

    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <DashboardLayout>
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          alignItems={'center'}
          justifyContent={'flex-start'}
          mb={0}
          ml={0}
        >
          <Typography variant="h4">DataGrid con Paginación</Typography>

          <IconButton aria-label="delete" onClick={() => {}} color="error">
            <HelpOutlineIcon />
          </IconButton>
        </Stack>
        <CustomBreadcrumbs />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Add Task
        </Button>

        <DataGrid rows={todos} columns={columns} checkboxSelection />

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>{editTask?.id ? 'Edit Task' : 'New Task'}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="text"
              label="Task"
              type="text"
              fullWidth
              variant="outlined"
              value={editTask?.id ? editTask.text : newTask}
              onChange={(e) =>
                editTask?.id
                  ? setEditTask({ ...editTask, text: e.target.value })
                  : setNewTask(e.target.value)
              }
            />
            <TextField
              margin="dense"
              id="priority"
              label="Priority"
              type="text"
              fullWidth
              variant="outlined"
              value={editTask?.priority || ''}
              onChange={(e) =>
                setEditTask(
                  editTask ? { ...editTask, priority: e.target.value } : null
                )
              }
            />
            <TextField
              margin="dense"
              id="dueDate"
              label="Due Date"
              type="date"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={editTask?.dueDate || ''}
              onChange={(e) =>
                setEditTask(
                  editTask ? { ...editTask, dueDate: e.target.value } : null
                )
              }
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={editTask?.description || ''}
              onChange={(e) =>
                setEditTask(
                  editTask ? { ...editTask, description: e.target.value } : null
                )
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={editTask?.id ? handleUpdateTask : handleAddTask}
              color="primary"
            >
              {editTask?.id ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      </DashboardLayout>
    </>
  );
};

export default TodoListView;
