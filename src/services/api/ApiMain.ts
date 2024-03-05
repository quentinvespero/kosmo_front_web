import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})