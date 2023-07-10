import { AxiosError, AxiosResponse } from "axios";
import axios from "axios";

//urls
export const REDIRECT_URI = "http://localhost:3000";
export const AUTHTENTICATION_ENDPOINT =
  "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const CLIENT_ID = "7228d526e579489e9239ae020b6bc6dc";
export const BASE_URL = "https://api.spotify.com/v1";
export const SCOPES: string[] = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-follow-read",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
  "user-read-email",
  "user-read-private",
  // "user-soa-link",
  // "user-soa-unlink",
  // "user-manage-entitlements",
  // "user-manage-partner",
  // "user-create-partner"
];

//Axios
const token: string | null = localStorage.getItem("auditicaToken");
const axiosClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const requests = async (
  options: any
): Promise<AxiosResponse<any, any> | AxiosError<unknown, any>> => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: AxiosError) => {
    return error;
  };
  return axiosClient(options).then(onSuccess).catch(onError);
};
// // Set authorization header
// export const setAuthorizationHeader = (token: string) => (AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`);

//Utility functions

export const SeeMore = (
  currentPageLimit: number,
  setCurrentPageLimit: any,
  increaseValue: number
) => {
  setCurrentPageLimit(currentPageLimit + increaseValue);
};

export const randomizeIndex = (item: []) => {
  return Math.floor(Math.random() * item.length);
};

export const addNumberComma = (number: number) => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export const convertToMinutes = (milliSeconds: number) => {
  const seconds = Math.floor(milliSeconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
