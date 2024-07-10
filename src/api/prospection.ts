import axios from "axios";

const token = localStorage.getItem("user");

const appsApi = axios.create({
  baseURL: "https://apiprospeccion.cicsagruas.com/api",
});

appsApi.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ` + token;
  }
  return config;
});

export const getUser = async () => {
  const { data } = await appsApi.get("/bussines_oportunity/user");
  return data;
};
