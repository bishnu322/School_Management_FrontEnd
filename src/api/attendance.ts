import { api } from "./Axios/axiosInstance";

export interface IUpsertAttendance {
  type: "update" | "create";
  user_id: string;
  date: string;
  status: "ABSENT" | "PRESENT";
  id?: string;
}

interface ICreateAttendance {
  user_id: string;
  date: string;
  status: "ABSENT" | "PRESENT";
}

interface IUpdateAttendance {
  status: "ABSENT" | "PRESENT";
  id: string;
}

// const getAllAttendece = async() =>{

// }

const createAttendance = async ({
  user_id,
  date,
  status,
}: ICreateAttendance) => {
  const response = await api.post("/attendance", {
    user_id,
    date,
    status,
  });

  return response.data;
};

const updateAttendance = async ({ status, id }: IUpdateAttendance) => {
  const response = await api.put(`/attendance/${id}`, {
    status,
  });

  return response.data;
};

export const upsertAttendance = async ({
  type,
  user_id,
  date,
  status,
  id,
}: IUpsertAttendance) => {
  if (type === "create") {
    return await createAttendance({ user_id, date, status });
  } else {
    if (id) {
      return await updateAttendance({ id, status });
    }
  }
};
