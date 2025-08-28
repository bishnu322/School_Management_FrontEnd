import { useEffect, useState } from "react";
import Input from "../../shared/DesignSystem/input/Input";
import DropDown from "../../shared/DesignSystem/dropdown/DropDown";
import { useForm } from "react-hook-form";
import { genderOption, roleDropdown } from "../../types/global.type";
import { StudentData } from "./StudentData";
import { StaffData } from "./StaffData";

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

  const onSubmit = (data: any) => setUserData({ ...data, role: roleState });

  console.log(userData);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex px-5 py-3 gap-3 justify-between flex-wrap h-full"
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
          id="firstName"
          type="text"
          placeholder="First Name"
          label="First Name"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="lastName"
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
          id="phoneNumber"
          type="number"
          placeholder="0000000000"
          label="Phone Number"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <Input
          id="dateOfBirth"
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
          id="image"
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

      {roleState === "STUDENT" ? (
        <StudentData register={register} />
      ) : (
        <StaffData register={register} />
      )}

      <button className="text-md rounded cursor-pointer bg-indigo-600 text-gray-300 font-bold transition-all duration-500 hover:bg-[#1E2938] mt-8 w-full md:w-[32%]">
        Submit
      </button>
    </form>
  );
};

export default UserRegistration;
