import Input from "../shared/DesignSystem/input/Input";
import DropDown from "./DropDown";

const UserRegistration = () => {
  return (
    <div>
      <form>
        <div className="flex px-5 py-3 gap-3 justify-between flex-wrap">
          <DropDown dropdownOptions={roleDropdown} title="Role" id="role" />

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

          <DropDown dropdownOptions={genderOption} title="Gender" id="gender" />

          <Input
            id="rollNumber"
            type="text"
            placeholder="Roll number"
            label="Roll Number"
          />

          <DropDown dropdownOptions={classesOption} title="Class" id="Class" />

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

// ! for the role option defined

type Role = "SUPER_ADMIN" | "ADMIN" | "STUDENT" | "TEACHER" | "ACCOUNTANT";

interface IRoleDropdown {
  title: Role;
}

export const roleDropdown: IRoleDropdown[] = [
  { title: "SUPER_ADMIN" },
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
