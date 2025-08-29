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
  { title: "Other", _id: "Other" },
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
  _id: string;
}

export const classesOption: IClassDropDown[] = [
  { title: "Nursery", _id: "Nursery" },
  {
    title: "K.G",
    _id: "K.G",
  },
  {
    title: "One",
    _id: "One",
  },
  {
    title: "Two",
    _id: "Two",
  },
  {
    title: "Three",
    _id: "Three",
  },
  {
    title: "Four",
    _id: "Four",
  },
  {
    title: "Five",
    _id: "Five",
  },
  {
    title: "Six",
    _id: "Six",
  },
  {
    title: "Seven",
    _id: "Seven",
  },
  {
    title: "Eight",
    _id: "Eight",
  },
  {
    title: "Nine",
    _id: "Nine",
  },
  {
    title: "Ten",
    _id: "Ten",
  },
];
