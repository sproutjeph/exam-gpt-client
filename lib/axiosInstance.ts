import axios, { AxiosRequestConfig } from "axios";

// export const baseURL = "http://localhost:8000/api/v1";
export const baseURL = "https://exam-gpt-server.onrender.com/api/v1";

const config: AxiosRequestConfig = { baseURL, withCredentials: true };

export const axiosInstance = axios.create(config);
