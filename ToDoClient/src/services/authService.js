import jwtDecode from "jwt-decode";
import axios from '../axiosConfig'
setAuthorizationBearer();


function saveAccessToken(authResult) {
    const token = authResult.token || authResult.access_token;
    if (token) {
      localStorage.setItem("access_token", token);
      setAuthorizationBearer();
    } else {
      console.error("Token not found in the response:", authResult);
    }
  }

function setAuthorizationBearer() {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
}

axios.interceptors.response.use(
    function(response) {
        return response;
      },
      function(error) {
        if (error.response.status === 401) {
          return (window.location.href = "/login");
        }
        return Promise.reject(error);
      }
);

const authService = {
  getLoginUser: () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      return jwtDecode(accessToken);
    }
    return null;
  },
  logout: () => {
    localStorage.setItem("access_token", "");
  },
  register: async (username, password) => {
    try {
      const response = await axios.post('/api/auth/register', { Username: username, Password: password });
      saveAccessToken(response.data);
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  },
  login: async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { Username: username, Password: password });
      saveAccessToken(response.data);
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  }
};

export default authService;