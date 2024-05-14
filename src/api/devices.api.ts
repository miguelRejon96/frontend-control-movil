import { instance } from "./base.api";

const endpoint = "devices";

export const devices = {
    getAll : function({page = 1 }:{page?:number}){
        return instance.get(endpoint, {params: {
            page
        }})
    }
}