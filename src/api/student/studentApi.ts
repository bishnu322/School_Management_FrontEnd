import type { TResponse } from "../../types/generic";
import type { IStudentResponse } from "../../types/student.type";
import { api } from "../Axios/axiosInstance";

type TGetAllStudent = TResponse<IStudentResponse[]>;

export const studentApi = async (): TGetAllStudent => {
  const response = await api.get<TGetAllStudent>("/student");

  console.log(response.data);
  return response.data;
};
