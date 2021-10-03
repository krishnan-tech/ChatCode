import axios from "axios";

const API = axios.create({
  baseURL: "http://api.paiza.io:80/runners",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default API;
