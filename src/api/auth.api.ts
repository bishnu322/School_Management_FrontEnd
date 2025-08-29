import { useQuery } from "@tanstack/react-query";
import { api } from "./Axios/axiosInstance";
import { generateSignUpFormData } from "./formData/generateFormData";

interface ILogin {
  email: string;
  password: string;
}

export const signInApi = async (data: ILogin) => {
  try {
    const response = await api.post("/auth", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export interface ISignUpData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  address: string;
  gender: string;
  role: string;
  profile_image: File;

  // student data
  roll_number?: string;
  class_id?: string;

  //staff data
  employee_id?: string;
  department?: string;
  salary?: string;
  qualification?: string;
  experienceYear?: string;
  date_of_join?: string;
  staff_data?: string;
}

export const signUpApi = async (signUpData: ISignUpData) => {
  const response = await api.post("/user", generateSignUpFormData(signUpData));
  console.log(response.data);
  return response.data;
};

export const logoutApi = async () => {
  const response = await api.post("/auth/logout");

  location.href = "/login";

  return response.data;
};

export const checkAuth = async () => {
  const response = await api.get("/user/authorize", { withCredentials: true });

  return response.data;
};

export const useAuthStatus = () => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: checkAuth,
  });
};
