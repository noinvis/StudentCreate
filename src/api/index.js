import axios from "axios";

// axios instance
export const api = axios.create({
    baseURL: "http://localhost:3011"
})

// api.interceptors.request.use(()=>{})