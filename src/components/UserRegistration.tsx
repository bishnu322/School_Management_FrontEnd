import { useState } from "react";
import Input from "../shared/DesignSystem/input/Input";
import DropDown from "./DropDown";

const UserRegistration = () => {
  const [roleState, setRoleState] = useState("");

  const OnChangeStateOfRole = (e: string) => {
    setRoleState(e);
  };

  return (
    <div>
      <form>
        <div className="flex px-5 py-3 gap-3 justify-between flex-wrap">
          <DropDown
            dropdownOptions={roleDropdown}
            title="Role"
            id="role"
            onChange={OnChangeStateOfRole}
          />

          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            label="First Name"
          />

          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            label="Last Name"
          />
          <Input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            label="Email"
          />
          <Input
            id="phoneNumber"
            type="number"
            placeholder="0000000000"
            label="Phone Number"
          />
          <Input
            id="dateOfBirth"
            type="date"
            placeholder="dd-mm-yyyy"
            label="Date of Birth"
          />

          <Input
            id="address"
            type="text"
            placeholder="Address"
            label="Address"
          />

          <Input
            id="image"
            type="file"
            placeholder="choose file"
            label="Photo"
          />

          <DropDown
            onChange={() => {}}
            dropdownOptions={genderOption}
            title="Gender"
            id="gender"
          />

          {roleState === "STUDENT" ? <StudentData /> : <StaffData />}

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

const StudentData = () => {
  return (
    <>
      <Input
        id="rollNumber"
        type="text"
        placeholder="Roll number"
        label="Roll Number"
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

const StaffData = () => {
  return (
    <>
      <Input
        id="empId"
        type="text"
        placeholder="Employee Id"
        label="Employee Id"
      />
      <Input
        id="department"
        type="text"
        placeholder="Department"
        label="Department"
      />
      <Input id="salary" type="text" placeholder="Salary" label="Salary" />

      <Input
        id="qualification"
        type="text"
        placeholder="Qualification"
        label="Qualification"
      />
      <Input
        id="experience"
        type="text"
        placeholder="Experience"
        label="Year of Experience"
      />
      <Input
        id="joinDate"
        type="date"
        placeholder="Joining Date"
        label="Joining Date"
      />
      <Input
        id="classTeacher"
        type="text"
        placeholder="Class Teacher"
        label="Class Teacher"
      />
      <Input
        id="staffData"
        type="text"
        placeholder="Staff description"
        label="Staff description"
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
