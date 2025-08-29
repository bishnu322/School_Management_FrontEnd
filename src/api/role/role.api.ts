import type { TResponse } from "../../types/generic";
import { api } from "../Axios/axiosInstance";

interface IRoleResponse {
  _id: string;
  role: string;
}

export const roleApi = async (): TResponse<IRoleResponse[]> => {
  const response = await api.get<TResponse<IRoleResponse[]>>("/role", {
    withCredentials: true,
  });

  return response.data;
};
