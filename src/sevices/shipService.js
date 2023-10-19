import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const shipService = {
    getAll:() => axiosService.get(urls.launches.base)
}

export {shipService}