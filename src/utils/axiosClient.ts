import axios from "axios";

export const baseURL = "https://fakestoreapi.com";

const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;
