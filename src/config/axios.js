import axios from "axios";

// Cliente para la API en Vite
const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export {clienteAxios};