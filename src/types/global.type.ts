// ! for the role option defined

type Role = "ADMIN" | "STUDENT" | "TEACHER" | "ACCOUNTANT";

export interface IRoleDropdown {
  title: Role;
  _id: string;
}

// ! for gender
type Gender = "Male" | "Female" | "Other";

interface IGenderDropdown {
  title: Gender;
  _id: string;
}

export const genderOption: IGenderDropdown[] = [
  { title: "Male", _id: "MALE" },
  { title: "Female", _id: "FEMALE" },
  { title: "Other", _id: "OTHER" },
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
