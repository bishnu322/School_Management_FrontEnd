import { useEffect, useMemo, useState } from "react";
import Input from "../../shared/DesignSystem/input/Input";
import DropDown from "../../shared/DesignSystem/dropdown/DropDown";
import { useForm } from "react-hook-form";

import { StudentData } from "./StudentData";
import { StaffData } from "./StaffData";
import { signUpApi } from "../../api/auth/auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { roleApi } from "../../api/role/role.api";
import { useGetRole } from "../../api/role/role";
import { genderOption } from "../../types/global.type";

const UserRegistration = () => {
  const [roleState, setRoleState] = useState("");
  const [userData, setUserData] = useState({});

  const OnChangeStateOfRole = (e: string) => {
    setRoleState(e);
  };

  const { register, handleSubmit, watch } = useForm();

  const { role } = watch();
  useEffect(() => {
    OnChangeStateOfRole(role);
  }, [role]);

  console.log(userData);

  const { mutate } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (response: any) => {
      console.log(response.data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const query = useQuery({
    queryFn: roleApi,
    queryKey: ["role"],
  });
  console.log(query.data);

  const roleDropdown = useGetRole();

  console.log({ roleDropdown });

  const isStudent = useMemo(() => {
    if (roleDropdown.length === 0) return false;

    const studentId = roleDropdown.find((el) => el.title === "STUDENT")?._id;

    if (!studentId) return false;

    return roleState === studentId;
  }, [roleState]);

  const onSubmit = (data: any) => {
    setUserData({ ...data, role: roleState });
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex px-5 py-3 gap-3 justify-between flex-wrap"
    >
      <div className="w-full md:w-[32%]">
        <DropDown
          dropdownOptions={roleDropdown}
          title="Role"
          id="role"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="first_name"
          type="text"
          placeholder="First Name"
          label="First Name"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="last_name"
          type="text"
          placeholder="Last Name"
          label="Last Name"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          label="Email"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="phone_number"
          type="number"
          placeholder="0000000000"
          label="Phone Number"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <Input
          id="date_of_birth"
          type="date"
          placeholder="dd-mm-yyyy"
          label="Date of Birth"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="address"
          type="text"
          placeholder="Address"
          label="Address"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="profile_image"
          type="file"
          placeholder="choose file"
          label="Photo"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <DropDown
          id="gender"
          title="Gender"
          dropdownOptions={genderOption}
          register={register}
        />
      </div>

      {isStudent ? (
        <StudentData register={register} />
      ) : (
        <StaffData register={register} />
      )}

      <button className="text-md rounded cursor-pointer bg-indigo-600 text-gray-300 font-bold transition-all duration-500 hover:bg-[#1E2938] mt-8  md:w-[32%]">
        Submit
      </button>
    </form>
  );
};

export default UserRegistration;
