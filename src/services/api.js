import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-loggie.onrender.com'
})

export default api