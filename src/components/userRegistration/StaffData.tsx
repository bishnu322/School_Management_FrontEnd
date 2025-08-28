import type { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../../shared/DesignSystem/input/Input";

export const StaffData = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <>
      <div className="w-full md:w-[32%]">
        <Input
          id="empId"
          label="Employee Id"
          type="text"
          placeholder="Employee Id"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="department"
          type="text"
          placeholder="Department"
          label="Department"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="salary"
          type="text"
          placeholder="Salary"
          label="Salary"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="qualification"
          type="text"
          placeholder="Qualification"
          label="Qualification"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <Input
          id="experience"
          type="text"
          placeholder="Experience"
          label="Year of Experience"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="joinDate"
          type="date"
          placeholder="Joining Date"
          label="Joining Date"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <Input
          id="classTeacher"
          type="text"
          placeholder="Class Teacher"
          label="Class Teacher"
          register={register}
        />
      </div>

      <div className="w-full md:w-[32%]">
        <Input
          id="staffData"
          type="text"
          placeholder="Staff description"
          label="Staff description"
          register={register}
        />
      </div>
    </>
  );
};
