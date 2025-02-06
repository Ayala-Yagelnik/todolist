import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/todos">View Todos</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ my: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todos" element={<ToDoList />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;


// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Container, Box, TextField, Checkbox, IconButton } from '@mui/material';
// import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';
// import Login from './components/Login';
// import Register from './components/Register';
// import service from './service';

// function TodoApp() {
//   const [newTodo, setNewTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [editTodoName, setEditTodoName] = useState("");

//   async function getTodos() {
//     const todos = await service.getTasks();
//     setTodos(todos);
//   }

//   async function createTodo(e) {
//     e.preventDefault();
//     await service.addTask(newTodo);
//     setNewTodo(""); // clear input
//     await getTodos(); // refresh tasks list (in order to see the new one)
//   }

//   async function updateCompleted(todo, isComplete) {
//     await service.setCompleted(todo.id, isComplete);
//     await getTodos(); // refresh tasks list (in order to see the updated one)
//   }

//   async function deleteTodo(id) {
//     await service.deleteTask(id);
//     await getTodos(); // refresh tasks list
//   }

//   async function startEditing(todo) {
//     setEditTodoId(todo.id);
//     setEditTodoName(todo.name);
//   }

//   async function saveEditTodo() {
//     await service.updateTask(editTodoId, editTodoName);
//     setEditTodoId(null);
//     setEditTodoName("");
//     await getTodos(); // refresh tasks list
//   }

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           ToDo List
//         </Typography>
//         <form onSubmit={createTodo}>
//           <TextField
//             fullWidth
//             placeholder="Well, let's take on the day"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             variant="outlined"
//             margin="normal"
//           />
//           <Button type="submit" variant="contained" color="primary">
//             Add Task
//           </Button>
//         </form>
//         <Box sx={{ mt: 4 }}>
//           <ul>
//             {todos.map(todo => (
//               <li key={todo.id} className={todo.isComplete ? "completed" : ""}>
//                 <div>
//                   <Checkbox
//                     checked={todo.isComplete}
//                     onChange={(e) => updateCompleted(todo, e.target.checked)}
//                   />
//                   {editTodoId === todo.id ? (
//                     <TextField
//                       value={editTodoName}
//                       onChange={(e) => setEditTodoName(e.target.value)}
//                       variant="outlined"
//                       size="small"
//                     />
//                   ) : (
//                     <Typography variant="body1" component="span">
//                       {todo.name}
//                     </Typography>
//                   )}
//                   {editTodoId === todo.id ? (
//                     <IconButton onClick={saveEditTodo}>
//                       <SaveIcon />
//                     </IconButton>
//                   ) : (
//                     <IconButton onClick={() => startEditing(todo)}>
//                       <EditIcon />
//                     </IconButton>
//                   )}
//                   <Button variant="contained" color="secondary" onClick={() => deleteTodo(todo.id)}>
//                     Delete
//                   </Button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ToDo App
//           </Typography>
//           <Button color="inherit" component={Link} to="/">Home</Button>
//           <Button color="inherit" component={Link} to="/login">Login</Button>
//           <Button color="inherit" component={Link} to="/register">Register</Button>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Box sx={{ my: 4 }}>
//           <Routes>
//             <Route path="/" element={<TodoApp />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </Box>
//       </Container>
//     </Router>
//   );
// }

// export default App;

// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import { AppBar, Toolbar, Typography, Button, Container, Box, TextField, Checkbox } from '@mui/material';
// // import Login from './components/Login';
// // import Register from './components/Register';
// // import service from './service';

// // function TodoApp() {
// //   const [newTodo, setNewTodo] = useState("");
// //   const [todos, setTodos] = useState([]);

// //   async function getTodos() {
// //     const todos = await service.getTasks();
// //     setTodos(todos);
// //   }

// //   async function createTodo(e) {
// //     e.preventDefault();
// //     await service.addTask(newTodo);
// //     setNewTodo(""); // clear input
// //     await getTodos(); // refresh tasks list (in order to see the new one)
// //   }

// //   async function updateCompleted(todo, isComplete) {
// //     await service.setCompleted(todo.id, isComplete);
// //     await getTodos(); // refresh tasks list (in order to see the updated one)
// //   }

// //   async function deleteTodo(id) {
// //     await service.deleteTask(id);
// //     await getTodos(); // refresh tasks list
// //   }

// //   useEffect(() => {
// //     getTodos();
// //   }, []);

// //   return (
// //     <Container maxWidth="md">
// //       <Box sx={{ my: 4 }}>
// //         <Typography variant="h4" component="h1" gutterBottom>
// //           ToDo List
// //         </Typography>
// //         <form onSubmit={createTodo}>
// //           <TextField
// //             fullWidth
// //             placeholder="Well, let's take on the day"
// //             value={newTodo}
// //             onChange={(e) => setNewTodo(e.target.value)}
// //             variant="outlined"
// //             margin="normal"
// //           />
// //           <Button type="submit" variant="contained" color="primary">
// //             Add Task
// //           </Button>
// //         </form>
// //         <Box sx={{ mt: 4 }}>
// //           <ul>
// //             {todos.map(todo => (
// //               <li key={todo.id} className={todo.isComplete ? "completed" : ""}>
// //                 <div>
// //                   <Checkbox
// //                     checked={todo.isComplete}
// //                     onChange={(e) => updateCompleted(todo, e.target.checked)}
// //                   />
// //                   <Typography variant="body1" component="span">
// //                     {todo.name}
// //                   </Typography>
// //                   <Button variant="contained" color="secondary" onClick={() => deleteTodo(todo.id)}>
// //                     Delete
// //                   </Button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         </Box>
// //       </Box>
// //     </Container>
// //   );
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <AppBar position="static">
// //         <Toolbar>
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //             ToDo App
// //           </Typography>
// //           <Button color="inherit" component={Link} to="/">Home</Button>
// //           <Button color="inherit" component={Link} to="/login">Login</Button>
// //           <Button color="inherit" component={Link} to="/register">Register</Button>
// //         </Toolbar>
// //       </AppBar>
// //       <Container>
// //         <Box sx={{ my: 4 }}>
// //           <Routes>
// //             <Route path="/" element={<TodoApp />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/register" element={<Register />} />
// //           </Routes>
// //         </Box>
// //       </Container>
// //     </Router>
// //   );
// // }

// // export default App;


// // // import React, { useEffect, useState } from 'react';
// // // import service from './service.js';

// // // function App() {
// // //   const [newTodo, setNewTodo] = useState("");
// // //   const [todos, setTodos] = useState([]);

// // //   async function getTodos() {
// // //     const todos = await service.getTasks();
// // //     setTodos(todos);
// // //   }

// // //   async function createTodo(e) {
// // //     e.preventDefault();
// // //     await service.addTask(newTodo);
// // //     setNewTodo("");//clear input
// // //     await getTodos();//refresh tasks list (in order to see the new one)
// // //   }

// // //   async function updateCompleted(todo, isComplete) {
// // //     await service.setCompleted(todo.id, isComplete);
// // //     await getTodos();//refresh tasks list (in order to see the updated one)
// // //   }

// // //   async function deleteTodo(id) {
// // //     await service.deleteTask(id);
// // //     await getTodos();//refresh tasks list
// // //   }

// // //   useEffect(() => {
// // //     getTodos();
// // //   }, []);

// // //   return (
// // //     <section className="todoapp">
// // //       <header className="header">
// // //         <h1>todos</h1>
// // //         <form onSubmit={createTodo}>
// // //           <input className="new-todo" placeholder="Well, let's take on the day" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
// // //         </form>
// // //       </header>
// // //       <section className="main" style={{ display: "block" }}>
// // //         <ul className="todo-list">
// // //           {todos.map(todo => {
// // //             return (
// // //               <li className={todo.isComplete ? "completed" : ""} key={todo.id}>
// // //                 <div className="view">
// // //                   <input className="toggle" type="checkbox" defaultChecked={todo.isComplete} onChange={(e) => updateCompleted(todo, e.target.checked)} />
// // //                   <label>{todo.name}</label>
// // //                   <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
// // //                 </div>
// // //               </li>
// // //             );
// // //           })}
// // //         </ul>
// // //       </section>
// // //     </section >
// // //   );
// // // }

// // // export default App;