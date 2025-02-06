import axios from 'axios';

const apiUrl = "http://localhost:5094";
axios.defaults.baseURL = apiUrl;

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location = '/login';
    } else {
      console.error('API call error:', error);
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  register: async (username, password) => {
    const response = await axios.post('/register', { username, password });
    if (response.data && response.data.Token) {
      localStorage.setItem('token', response.data.Token);
    }
    return response.data;
  },
  login: async (username, password) => {
    const response = await axios.post('/login', { username, password });
    if (response.data && response.data.Token) {
      localStorage.setItem('token', response.data.Token);
    }
    return response.data;
  },
  getTasks: async () => {
    const response = await axios.get('/tasks');
    return response.data;
  },
  addTask: async (name) => {
    const response = await axios.post('/tasks', { name, isComplete: false });
    return response.data;
  },
  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete });
    try {
      const task = await axios.get(`/tasks/${id}`);
      const response = await axios.put(`/tasks/${id}`, { ...task.data, isComplete });
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },
  updateTask: async (id, name) => {
    try {
      const task = await axios.get(`/tasks/${id}`);
      const response = await axios.put(`/tasks/${id}`, { ...task.data, name });
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },
  deleteTask: async (id) => {
    console.log('deleteTask');
    try {
      const result = await axios.delete(`/tasks/${id}`);
      return result.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
};
