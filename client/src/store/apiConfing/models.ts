import { AxiosError } from "axios";

export interface IShowRespErrorsProps {
  message?: string;
  response?: AxiosError["response"];
}
