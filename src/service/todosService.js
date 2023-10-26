import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const todosService = {
    getAll:() => axiosService.get(urls.todos.base)
}


export {
    todosService
}