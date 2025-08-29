import { useQuery } from "@tanstack/react-query";
import type { IRoleDropdown } from "../../types/global.type";
import { roleApi } from "./role.api";

export const roleDropdown: IRoleDropdown[] = [
  // { title: "SUPER_ADMIN" },
  { title: "ADMIN", _id: "" },
  { title: "STUDENT", _id: "" },
  { title: "TEACHER", _id: "" },
  { title: "ACCOUNTANT", _id: "" },
];

export const useGetRole = () => {
  const { data, isLoading } = useQuery({
    queryFn: roleApi,
    queryKey: ["role_api"],
  });

  if (isLoading) return [];
  if (!data) return [];

  const role = data.data;

  const rolesDropdown = role.map((r) => ({
    title: r.role,
    _id: r._id,
  }));

  return rolesDropdown;
};
