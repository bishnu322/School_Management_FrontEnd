import { api } from "./Axios/axiosInstance";

export const getAttendanceByUserId = async (user_id: string) => {
  const response = await api.get(`/attendance`, {
    params: { user_id },
  });

  console.log(response.data);

  return response.data;
};
