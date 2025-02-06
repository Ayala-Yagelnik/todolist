import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, TextField, Button, Checkbox, IconButton } from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';
import service from '../service';

const TodoList=()=> {
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
    <Container maxWidth="md">
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
          <ul>
            {todos.map(todo => (
              <li key={todo.id} className={todo.isComplete ? "completed" : ""}>
                <div>
                  <Checkbox
                    checked={todo.isComplete}
                    onChange={(e) => updateCompleted(todo, e.target.checked)}
                  />
                  {editTodoId === todo.id ? (
                    <TextField
                      value={editTodoName}
                      onChange={(e) => setEditTodoName(e.target.value)}
                      variant="outlined"
                      size="small"
                    />
                  ) : (
                    <Typography variant="body1" component="span">
                      {todo.name}
                    </Typography>
                  )}
                  {editTodoId === todo.id ? (
                    <IconButton onClick={saveEditTodo}>
                      <SaveIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => startEditing(todo)}>
                      <EditIcon />
                    </IconButton>
                  )}
                  <Button variant="contained" color="secondary" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Container>
  );
}

export default TodoList;