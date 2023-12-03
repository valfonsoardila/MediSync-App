import axios from "axios";

const API_URL = process.env.API_URL;

const createAppointment = (appointment) => {
  return axios.post(`${API_URL}/appointment`, appointment);
};

const getAppointment = (id) => {
  return axios.get(`${API_URL}/appointment/${id}`);
};

const getAppointments = () => {
  return axios.get(`${API_URL}/appointment`);
};

const updateAppointment = (id, appointment) => {
  return axios.put(`${API_URL}/appointment/${id}`, appointment);
};

const deleteAppointment = (id) => {
  return axios.delete(`${API_URL}/appointment/${id}`);
};

export {
  createAppointment,
  getAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
};
