import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: () => axiosService.get(urls.users),
    updateById: (id, data) => axiosService.put(`${urls.users}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.users}/${id}`),
    create:(car)=>axiosService.post(urls.users, car)
}

export {
    userService
}