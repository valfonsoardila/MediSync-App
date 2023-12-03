import axios from "axios";

const API_URL = process.env.API_URL;

const signupRequest = (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

const signinRequest = (email, password) => {
  return axios
    .post(`${API_URL}/signin`, { email, password })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const resetRequest = (email) => {
  return axios.post(`${API_URL}/reset-password`, { email });
};

const signoutRequest = () => {
  localStorage.removeItem("user");
};

export { signupRequest, signinRequest, signoutRequest, resetRequest };
