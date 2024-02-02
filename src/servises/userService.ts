import { urls } from "../configs";
import { IUser } from "../interfaces";
import { AxiosRes, axiosService } from "./axiosService";

export const userService = {
   getAll: (): AxiosRes<IUser[]> => axiosService.get(urls.users)
}