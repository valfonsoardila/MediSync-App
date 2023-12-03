import axios from "axios";

const API_URL = "http://localhost:4000/api";

const createDisease = (disease) => {
  return axios.post(`${API_URL}/disease`, disease);
};

const getDisease = (id) => {
  return axios.get(`${API_URL}/disease/${id}`);
};

const getDiseases = () => {
  return axios.get(`${API_URL}/disease`);
};

const updateDisease = (id, disease) => {
  return axios.put(`${API_URL}/disease/${id}`, disease);
};

const deleteDisease = (id) => {
  return axios.delete(`${API_URL}/disease/${id}`);
};

export { createDisease, getDisease, getDiseases, updateDisease, deleteDisease };
