// Axios
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import keycloak from "../../AppConfig/keycloak";

// constants
import { ApiUrl } from "./APIConstants";

// utils
import { apiErrorHandler } from "./helpers";

export const axiosInstance = axios.create({
  baseURL: ApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  ({ data }: AxiosResponse) => data,
  error => apiErrorHandler(error)
);

axiosInstance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    requestConfig.headers = {
      // Authorization: `Bearer ${keycloak.token}`,
    };
    return requestConfig;
  },
  error => apiErrorHandler(error)
);
