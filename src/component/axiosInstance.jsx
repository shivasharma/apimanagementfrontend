import axios from 'axios';

const API_URL = "http://localhost:8081"; // Replace with your Spring Boot backend URL

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true // Include credentials (cookies, authorization headers, etc.)
});

export default axiosInstance;