import axios from "axios";

const API_URL = "http://localhost:4000/api";

const getDoctor = (id) => {
    return axios.get(`${API_URL}/doctor/${id}`);
};

const getDoctors = () => {
    return axios.get(`${API_URL}/doctors`);
}

export { getDoctor, getDoctors };