import axios from "axios";

export const Api = axios.create({
  baseURL: "https://authentication-app-back-end.up.railway.app/",
});
