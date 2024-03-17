import axios, { AxiosRequestConfig } from "axios";

import { baseUrl } from "./api.constants";

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    accept: "application/json",
  },
};

export const axiosInstance = axios.create(config);
