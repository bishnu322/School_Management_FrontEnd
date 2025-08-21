import type { FieldValues, UseFormRegister } from "react-hook-form";
import { cn } from "../../utils/cn";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./inputVariants";

interface IInput {
  id: string;
  type: string;
  placeholder?: string;
  label: string;
  register?: UseFormRegister<FieldValues>;
}

const Input = ({
  id,
  type,
  placeholder,
  label,
  register,
  variant,
  size,
}: IInput & VariantProps<typeof inputVariants>) => {
  return (
    <div className="flex flex-col gap-2 font-semibold w-full md:w-[32%]">
      <label htmlFor={id} className="text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={cn(
          inputVariants({
            variant,
            size,
            className:
              "py-3 px-2 bg-gray-300 text-gray-900 outline-0 rounded text-sm",
          })
        )}
        {...(register ? register(id) : {})}
      />
    </div>
  );
};

export default Input;
