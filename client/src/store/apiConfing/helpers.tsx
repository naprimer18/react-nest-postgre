// Axios
import { AxiosError } from "axios";
// import { axiosInstance } from "./instance";

// KeyCloak
// import keycloak from "../../AppConfig/keycloak";

// store
import { addModal } from "../ErrorInterceptorModal/actions";
import { dispatch } from "../";
// import { IShowRespErrorsProps } from "./models";

// const onLogOut = () => keycloak.logout();
const showErrorModal = (title: string) => dispatch(addModal(title));

// reconnect HTTP
// const tryHTTPReconnect = (milliseconds: number, originalRequest: AxiosError) => {
//   return setTimeout(
//     () => axiosInstance.request(originalRequest.config),
//     milliseconds
//   );
// };

export const apiErrorHandler = (error: Error & AxiosError) => {
  switch (error?.response?.status) {
    case 401: {
      // onLogOut();
      break;
    }
    case 403: {
      showErrorModal("Authorisation Error");
      break;
    }
    default: {
      showErrorModal("Something is wrong");
      // reconnect
      // tryHTTPReconnect(2000, error);
    }
  }
  return Promise.reject(error);
};
