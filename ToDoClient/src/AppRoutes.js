import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import ToDoList from './components/ToDoList';
import Register from './components/Register';


const AppRoutes = [
    {
        index: true,
        element: <Home />
    }, 
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/toDoList',
        element: <ToDoList />
    }
];

export default AppRoutes;
