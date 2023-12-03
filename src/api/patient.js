import axios from "axios";

const API_URL = "http://localhost:4000/api";

const createPatient = (patient) => {
  return axios.post(`${API_URL}/patient`, patient);
};

const getPatient = (id) => {
  return axios.get(`${API_URL}/patient/${id}`);
};

const getPatients = () => {
  return axios.get(`${API_URL}/patient`);
};

const updatePatient = (id, patient) => {
  return axios.put(`${API_URL}/patient/${id}`, patient);
};

const deletePatient = (id) => {
  return axios.delete(`${API_URL}/patient/${id}`);
};

export { createPatient, getPatient, getPatients, updatePatient, deletePatient };
