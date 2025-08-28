import type { FieldValues, UseFormRegister } from "react-hook-form";
import { cn } from "../../utils/cn";

interface DropDownOption {
  title: string;
}

interface DropDownProps {
  dropdownOptions: DropDownOption[];
  title: string;
  id: string;
  register?: UseFormRegister<FieldValues>;
  className?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  dropdownOptions,
  title,
  id,
  className,
  register,
}) => {
  return (
    <div className="flex flex-col gap-2 font-semibold">
      <label htmlFor={id} className="text-gray-300">
        {title}
      </label>
      <select
        className={cn(
          "py-3 px-2 bg-gray-300 text-gray-900 outline-0 rounded text-sm w-full",
          className
        )}
        // name={id}
        id={id}
        {...(register ? register(id) : {})}
      >
        {dropdownOptions.map((roles) => (
          <option key={roles.title} value={roles.title}>
            {roles.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
