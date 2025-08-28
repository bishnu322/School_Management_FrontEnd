import { useState } from "react";
import Input from "../../shared/DesignSystem/input/Input";
import DropDown from "../../shared/DesignSystem/dropdown/DropDown";
import {
  useForm,
  type FieldValues,
  type UseFormRegister,
} from "react-hook-form";
import {
  classesOption,
  genderOption,
  roleDropdown,
} from "../../types/global.type";

const UserRegistration = () => {
  const [roleState, setRoleState] = useState("");
  const [userData, setUserData] = useState({});

  const OnChangeStateOfRole = (e: string) => {
    setRoleState(e);
  };

  const { register, handleSubmit } = useForm();

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
          onChange={OnChangeStateOfRole}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="firstName"
          type="text"
          placeholder="First Name"
          label="First Name"
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="lastName"
          type="text"
          placeholder="Last Name"
          label="Last Name"
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          label="Email"
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="phoneNumber"
          type="number"
          placeholder="0000000000"
          label="Phone Number"
        />
      </div>
      <div className="w-full md:w-[32%]">
        <Input
          id="dateOfBirth"
          type="date"
          placeholder="dd-mm-yyyy"
          label="Date of Birth"
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input id="address" type="text" placeholder="Address" label="Address" />
      </div>

      <div className="w-full md:w-[32%]">
        <Input id="image" type="file" placeholder="choose file" label="Photo" />
      </div>

      <div className="w-full md:w-[32%]">
        <DropDown
          onChange={() => {}}
          dropdownOptions={genderOption}
          title="Gender"
          id="gender"

          // register={register}
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

const StaffData = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <>
      <div className="w-full md:w-[32%]">
        <Input
          id="empId"
          label="Employee Id"
          type="text"
          placeholder="Employee Id"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="department"
          type="text"
          placeholder="Department"
          label="Department"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="salary"
          type="text"
          placeholder="Salary"
          label="Salary"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="qualification"
          type="text"
          placeholder="Qualification"
          label="Qualification"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <Input
          id="experience"
          type="text"
          placeholder="Experience"
          label="Year of Experience"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="joinDate"
          type="date"
          placeholder="Joining Date"
          label="Joining Date"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <Input
          id="classTeacher"
          type="text"
          placeholder="Class Teacher"
          label="Class Teacher"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="staffData"
          type="text"
          placeholder="Staff description"
          label="Staff description"
          register={register}
        />
      </div>
    </>
  );
};

const StudentData = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <>
      <div className="w-full md:w-[32%]">
        <Input
          id="rollNumber"
          type="text"
          placeholder="Roll number"
          label="Roll Number"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <DropDown
          onChange={() => {}}
          dropdownOptions={classesOption}
          title="Class"
          id="Class"
        />
      </div>
    </>
  );
};
