import axios from "axios"

const API = axios.create({
    baseURL: "http://api.paiza.io:80/runners"
});

export default API;