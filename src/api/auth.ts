import axios from "axios";

type Login = {
  email: string;
  password: string;
};

const token = localStorage.getItem("user");

let configuracion = {
  headers: {
    Authorization: `Bearer ` + token,
  },
};

const appsApi = axios.create({
  baseURL: "https://apicontrolti-production.up.railway.app/api",
});

export const login = async (datos: Login) => {
  return await appsApi.post("/auth/login", datos);
};

export const usuarioValido = async () => {
  const { data } = await appsApi.get<JsonData>(
    "/usuarios/usuario_auth",
    configuracion
  );
  return data;
};
