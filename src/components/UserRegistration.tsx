import { useState } from "react";
import Input from "../shared/DesignSystem/input/Input";
import DropDown from "./DropDown";
import {
  useForm,
  type FieldValues,
  type UseFormRegister,
} from "react-hook-form";

const UserRegistration = () => {
  const [roleState, setRoleState] = useState("");

  const OnChangeStateOfRole = (e: string) => {
    setRoleState(e);
  };

  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data: any) => console.log(data);

  console.log(watch);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex px-5 py-3 gap-3 justify-between flex-wrap">
          <DropDown
            dropdownOptions={roleDropdown}
            title="Role"
            id="role"
            onChange={OnChangeStateOfRole}
            // {...register(roleState)}
            // register={register}
          />

          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            label="First Name"
            register={register}
          />

          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            label="Last Name"
            register={register}
          />
          <Input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            label="Email"
            register={register}
          />
          <Input
            id="phoneNumber"
            type="number"
            placeholder="0000000000"
            label="Phone Number"
            register={register}
          />
          <Input
            id="dateOfBirth"
            type="date"
            placeholder="dd-mm-yyyy"
            label="Date of Birth"
            register={register}
          />

          <Input
            id="address"
            type="text"
            placeholder="Address"
            label="Address"
            register={register}
          />

          <Input
            id="image"
            type="file"
            placeholder="choose file"
            label="Photo"
            register={register}
          />

          <DropDown
            onChange={() => {}}
            dropdownOptions={genderOption}
            title="Gender"
            id="gender"
            // register={register}
          />

          {roleState === "STUDENT" ? (
            <StudentData register={register} />
          ) : (
            <StaffData register={register} />
          )}

          <div className="flex justify-center items-center mt-6">
            <button className=" flex px-23 py-2 text-md rounded cursor-pointer bg-violet-600 font-bold transition-all duration-500 hover:bg-green-500 hover:text-green-900 ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;

const StudentData = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <>
      <Input
        id="rollNumber"
        type="text"
        placeholder="Roll number"
        label="Roll Number"
        register={register}
      />
      <DropDown
        onChange={() => {}}
        dropdownOptions={classesOption}
        title="Class"
        id="Class"
      />
    </>
  );
};

const StaffData = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <>
      <Input
        id="empId"
        label="Employee Id"
        type="text"
        placeholder="Employee Id"
        register={register}
      />
      <Input
        id="department"
        type="text"
        placeholder="Department"
        label="Department"
        register={register}
      />
      <Input
        id="salary"
        type="text"
        placeholder="Salary"
        label="Salary"
        register={register}
      />

      <Input
        id="qualification"
        type="text"
        placeholder="Qualification"
        label="Qualification"
        register={register}
      />
      <Input
        id="experience"
        type="text"
        placeholder="Experience"
        label="Year of Experience"
        register={register}
      />
      <Input
        id="joinDate"
        type="date"
        placeholder="Joining Date"
        label="Joining Date"
        register={register}
      />
      <Input
        id="classTeacher"
        type="text"
        placeholder="Class Teacher"
        label="Class Teacher"
        register={register}
      />
      <Input
        id="staffData"
        type="text"
        placeholder="Staff description"
        label="Staff description"
        register={register}
      />
    </>
  );
};

// ! for the role option defined

type Role = "ADMIN" | "STUDENT" | "TEACHER" | "ACCOUNTANT";

interface IRoleDropdown {
  title: Role;
}

export const roleDropdown: IRoleDropdown[] = [
  // { title: "SUPER_ADMIN" },
  { title: "ADMIN" },
  { title: "STUDENT" },
  { title: "TEACHER" },
  { title: "ACCOUNTANT" },
];

// ! for gender
type Gender = "Male" | "Female" | "Other";

interface IGenderDropdown {
  title: Gender;
}

export const genderOption: IGenderDropdown[] = [
  { title: "Male" },
  { title: "Female" },
  { title: "Other" },
];

// ! for classes

type DropDownClass =
  | "Nursery"
  | "K.G"
  | "One"
  | "Two"
  | "Three"
  | "Four"
  | "Five"
  | "Six"
  | "Seven"
  | "Eight"
  | "Nine"
  | "Ten";

interface IClassDropDown {
  title: DropDownClass;
}

export const classesOption: IClassDropDown[] = [
  { title: "Nursery" },
  { title: "K.G" },
  { title: "One" },
  { title: "Two" },
  { title: "Three" },
  { title: "Four" },
  { title: "Five" },
  { title: "Six" },
  { title: "Seven" },
  { title: "Eight" },
  { title: "Nine" },
  { title: "Ten" },
];
