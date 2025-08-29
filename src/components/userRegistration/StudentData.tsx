import Input from "../../shared/DesignSystem/input/Input";
import DropDown from "../../shared/DesignSystem/dropdown/DropDown";
import { classesOption } from "../../types/global.type";
import type { FieldValues, UseFormRegister } from "react-hook-form";

export const StudentData = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <>
      <div className="w-full md:w-[32%]">
        <Input
          id="roll_number"
          type="text"
          placeholder="Roll number"
          label="Roll Number"
          register={register}
        />
      </div>
      <div className="w-full md:w-[32%]">
        <DropDown
          dropdownOptions={classesOption}
          title="Class"
          id="class_id"
          register={register}
        />
      </div>
    </>
  );
};
