import axios from "axios";

const API_URL = process.env.API_URL;

const createSpecialty = (specialty) => {
  return axios.post(`${API_URL}/specialty`, specialty);
};

const getSpecialty = (id) => {
  return axios.get(`${API_URL}/specialty/${id}`);
};

const getSpecialties = () => {
  return axios.get(`${API_URL}/specialty`);
};

const updateSpecialty = (id, specialty) => {
  return axios.put(`${API_URL}/specialty/${id}`, specialty);
};

const deleteSpecialty = (id) => {
  return axios.delete(`${API_URL}/specialty/${id}`);
};

export {
  createSpecialty,
  getSpecialty,
  getSpecialties,
  updateSpecialty,
  deleteSpecialty,
};
