import type { TResponse } from "../types/generic";
import type { IUserData } from "../types/studentAttendance";
import { api } from "./Axios/axiosInstance";

// getting attendance details using student id

type TGetAllStudentAttendance = TResponse<IUserData>;

export const getAttendanceByUserId = async (
  user_id: string
): TGetAllStudentAttendance => {
  const response = await api.get<TGetAllStudentAttendance>(
    `/attendance/${user_id}`
  );

  console.log(response.data);

  return response.data;
};

// creating student attendance

export const createStudentAttendance = async (
  user_id: string,
  date: string,
  status: string
) => {
  const response = await api.post(`/attendance`, {
    user_id,
    date,
    status,
  });

  console.log(response.data);

  return response.data;
};

export const updateAttendance = async (id: string, status: string) => {
  const response = await api.put(`/attendance/${id}`, { status });

  console.log(response.data);

  return response.data;
};
