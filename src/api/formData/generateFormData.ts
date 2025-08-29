import type { ISignUpData } from "../auth.api";

export const generateSignUpFormData = (signUpData: ISignUpData) => {
  const formData = new FormData();

  formData.append("first_name", signUpData.first_name);
  formData.append("last_name", signUpData.last_name);
  formData.append("email", signUpData.email);
  formData.append("phone_number", signUpData.phone_number);
  formData.append("date_of_birth", signUpData.date_of_birth);
  formData.append("address", signUpData.address);
  formData.append("gender", signUpData.gender);
  formData.append("role", signUpData.role);

  // 👇 make sure to remove space in key name
  formData.append("profile_image", signUpData.profile_image[0]);

  // student data
  if (signUpData.roll_number)
    formData.append("roll_number", signUpData.roll_number);
  if (signUpData.class_id) formData.append("class_id", signUpData.class_id);

  // staff data
  if (signUpData.employee_id)
    formData.append("employee_id", signUpData.employee_id);
  if (signUpData.department)
    formData.append("department", signUpData.department);
  if (signUpData.salary) formData.append("salary", signUpData.salary);
  if (signUpData.qualification)
    formData.append("qualification", signUpData.qualification);
  if (signUpData.experienceYear)
    formData.append("experienceYear", signUpData.experienceYear);
  if (signUpData.date_of_join)
    formData.append("date_of_join", signUpData.date_of_join);
  if (signUpData.staff_data)
    formData.append("staff_data", signUpData.staff_data);

  return formData;
};
