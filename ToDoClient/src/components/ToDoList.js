import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, TextField, Button, IconButton, Paper, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Grid } from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Delete as DeleteIcon, CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from '@mui/icons-material';
import service from '../services/toDoService';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoName, setEditTodoName] = useState("");

  async function getTodos() {
    const todos = await service.getTasks();
    setTodos(todos);
  }

  async function createTodo(e) {
    e.preventDefault();
    await service.addTask(newTodo);
    setNewTodo(""); // clear input
    await getTodos(); // refresh tasks list (in order to see the new one)
  }

  async function updateCompleted(todo, isComplete) {
    await service.setCompleted(todo.id, isComplete);
    await getTodos(); // refresh tasks list (in order to see the updated one)
  }

  async function deleteTodo(id) {
    await service.deleteTask(id);
    await getTodos(); // refresh tasks list
  }

  async function startEditing(todo) {
    setEditTodoId(todo.id);
    setEditTodoName(todo.name);
  }

  async function saveEditTodo() {
    await service.updateTask(editTodoId, editTodoName);
    setEditTodoId(null);
    setEditTodoName("");
    await getTodos(); // refresh tasks list
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ToDo List
        </Typography>
        <form onSubmit={createTodo}>
          <TextField
            fullWidth
            placeholder="Well, let's take on the day"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </form>
        <Box sx={{ mt: 4 }}>
          <Paper>
            <List>
              {todos.map(todo => (
                <ListItem key={todo.id} dense>
                  <Grid container alignItems="center">
                    <Grid  item>
                    <IconButton sx={{ml:1}} edge="start" onClick={() => deleteTodo(todo.id)}>
                        <DeleteIcon />
                      </IconButton>
                      {editTodoId === todo.id ? (
                        <IconButton edge="start" onClick={saveEditTodo}>
                          <SaveIcon />
                        </IconButton>
                      ) : (
                        <IconButton edge="start" onClick={() => startEditing(todo)}>
                          <EditIcon />
                        </IconButton>
                      )}
                     
                    </Grid>
                    <Grid item xs>
                      {editTodoId === todo.id ? (
                        <TextField
                          value={editTodoName}
                          onChange={(e) => setEditTodoName(e.target.value)}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      ) : (
                        <ListItemText primary={todo.name} />
                      )}
                    </Grid>
                    <Grid item>
                      <IconButton
                        edge="end"
                        onClick={() => updateCompleted(todo, !todo.isComplete)}
                        sx={{ mr: 2 }} // Add margin to the left for spacing
                      >
                        {todo.isComplete ? (
                          <CheckCircleIcon sx={{ color: 'green' }} />
                        ) : (
                          <CancelIcon sx={{ color: 'red' }} />
                        )}
                      </IconButton>
                    </Grid>
                  </Grid>
                </ListItem>

              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default TodoList;
