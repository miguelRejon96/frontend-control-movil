import axios from "axios";

const BASE_URL = "http://localhost:3000/api/"

export const instance = axios.create({
    baseURL: BASE_URL
})



export const listDevices = async (page: number) => {
    const { data } = await instance.get("/devices?page=" + page);
    console.log(data)
    return data;
}