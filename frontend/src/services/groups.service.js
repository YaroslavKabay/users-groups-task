import {axiosService} from "./axios.service";
import {urls} from "../constants";

const groupService = {
    getAll: () => axiosService.get(urls.groups),
    updateById: (id, data) => axiosService.put(`${urls.groups}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.groups}/${id}`),
    create:(car)=> axiosService.post(urls.groups, car)
}

export {
    groupService
}