import type { IResponse } from "./generic";

export interface IStudentResponse extends IResponse {
  // userdata
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  address: string;
  gender: string;
  role: string;
  profile_image: string;

  //   student data
  roll_number?: string;
  class_id?: string;
}
