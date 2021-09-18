import axios from "axios";

const ServerApi = axios.create({
  baseURL: "http://localhost:8080",
});

export default ServerApi;
