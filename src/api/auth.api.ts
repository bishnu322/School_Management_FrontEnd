import axios from "axios";

interface ILogin {
  email: string;
  password: string;
}

export const signInApi = async (data: ILogin) => {
  try {
    const response = await axios.post(
      "https://school-management-system-nowe.onrender.com/api/auth",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
