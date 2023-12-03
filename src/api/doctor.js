import axios from "axios";

const API_URL = process.env.API_URL;

const getDoctor = (id) => {
    return axios.get(`${API_URL}/doctor/${id}`);
};

const getDoctors = () => {
    return axios.get(`${API_URL}/doctors`);
}

export { getDoctor, getDoctors };