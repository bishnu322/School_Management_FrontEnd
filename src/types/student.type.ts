import type { IResponse } from "./generic";

export interface IStudentResponse extends IResponse {
  // userdata
  user_id: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
    address: string;
    gender: string;
    role: {
      role: string;
    };
    profile_image: string;
  };

  //   student data
  roll_number?: string;
  class_id?: string;
}
