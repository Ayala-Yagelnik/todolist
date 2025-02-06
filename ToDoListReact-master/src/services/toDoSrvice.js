import axios from '../axiosConfig'

// const apiUrl = "http://localhost:5094";
// axios.defaults.baseURL = apiUrl;

const toDoService = {
  getTasks: async () => {
    const response = await axios.get('/tasks');
    return response.data;
  },
  addTask: async (name) => {
    try {

      const response = await axios.post('/tasks', { Name: name, isComplete: false });
      return response.data;
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  },
  setCompleted: async (id, isComplete) => {
    try {
      const task = await axios.get(`/tasks/${id}`);
      const response = await axios.put(`/tasks/${id}`,  { ...task.data, isComplete });
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },
  updateTask: async (id, name) => {
    try {
      const task = await axios.get(`/tasks/${id}`);
      const response = await axios.put(`/tasks/${id}`,  { ...task.data, name });
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },
  deleteTask: async (id) => {
    try {
      const result = await axios.delete(`/tasks/${id}`);
      return result.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
};

export default toDoService;
