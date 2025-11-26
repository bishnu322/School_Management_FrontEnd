import type { IResponse } from "./generic";

export interface IRole {
  _id: string;
  role: string;
}

export interface IProfileImage {
  path: string;
  public_id: string;
}

export interface IUser extends IResponse {
  first_name: string;
  last_name: string;
  email: string;
  role: IRole;
  phone_number: number;
  date_of_birth: string;
  address: string;
  gender: string;
  profile_image: IProfileImage;
}

export interface IAttendance {
  _id: string;
  user_id: string;
  status: string;
  date: string;
}

export interface IStudentAttendance {
  _id: string;
  roll_number: number;
  user: IUser;
  attendance: IAttendance[];
}

export interface IUserData {
  data: IStudentAttendance;
}
