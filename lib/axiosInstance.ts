import axios, { AxiosRequestConfig } from "axios";

export const baseURL = "http://localhost:8000/api/v1";

const config: AxiosRequestConfig = { baseURL };

export const axiosInstance = axios.create(config);