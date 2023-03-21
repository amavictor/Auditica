import { AxiosError, AxiosResponse } from "axios";
import axios from "axios";

//urls
export const REDIRECT_URI = "http://localhost:3000";
export const AUTHTENTICATION_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const CLIENT_ID = "7228d526e579489e9239ae020b6bc6dc";
export const BASE_URL = "https://api.spotify.com/v1";

//Axios
const token: string | null = localStorage.getItem("auditicaToken");
const axiosClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});


export const requests = async (options: any): Promise<AxiosResponse<any, any> | AxiosError<unknown, any>> => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: AxiosError) => {
    return error;
  };
  return axiosClient(options).then(onSuccess).catch(onError);
};
// // Set authorization header
// export const setAuthorizationHeader = (token: string) => (AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`);