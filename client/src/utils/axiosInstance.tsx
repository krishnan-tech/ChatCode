import axios from "axios";

const ServerApi = axios.create({
  baseURL: "http://api.paiza.io:80/runners",
});

export default ServerApi;
