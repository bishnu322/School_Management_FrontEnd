import { useQuery } from "@tanstack/react-query";
import { api } from "../Axios/axiosInstance";

export const checkAuth = async () => {
  const response = await api.get("/user/authorize", { withCredentials: true });

  return response.data;
};

export const useAuthStatus = () => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: checkAuth,
    retry: false,
  });
};
