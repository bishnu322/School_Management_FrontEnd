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
