
import axios from 'axios';

const instance = axios.create({
   baseURL:  process.env.REACT_APP_API_KEY, 
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error("Error in response:", error.response ? error.response.data : error.message);
    return Promise.reject(error); 
  }
);

export default instance;
