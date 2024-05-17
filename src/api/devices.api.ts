import axios from "axios";
import { Device, InputsNewDevice } from "@/types";


const BASE_URL = "http://localhost:3000/api/"

export const instance = axios.create({
    baseURL: BASE_URL
})



export const listDevices = async () => {
    const {data} = await instance.get("/devices")
    return data
}

export const insertDevice = async (deviceData: InputsNewDevice): Promise<Device> => {
    try {
        const response = await instance.post("/devices", deviceData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error al crear dispositivo:', error);
        throw error;
    }
};