import axios from "axios";

const API_URL = "http://localhost:4000/api";

const createStory = (story) => {
  return axios.post(`${API_URL}/story`, story);
};

const getStory = (id) => {
  return axios.get(`${API_URL}/story/${id}`);
};

const getStories = () => {
  return axios.get(`${API_URL}/story`);
};

const updateStory = (id, story) => {
  return axios.put(`${API_URL}/story/${id}`, story);
};

const deleteStory = (id) => {
  return axios.delete(`${API_URL}/story/${id}`);
};

export { createStory, getStory, getStories, updateStory, deleteStory };
