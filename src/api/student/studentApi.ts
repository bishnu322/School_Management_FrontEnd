import type { TResponse } from "../../types/generic";
import type { IStudentResponse } from "../../types/student.type";
import { api } from "../Axios/axiosInstance";

type TGetAllStudent = TResponse<IStudentResponse[]>;

export const studentApi = async (params?: {
  query?: string;
  role?: string;
}): TGetAllStudent => {
  const response = await api.get<TGetAllStudent>(`/student`, {
    params,
  });

  console.log(response);
  return response.data;
};
