import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { cn } from "../../utils/cn";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./inputVariants";

interface IInput<T extends FieldValues> {
  id: Path<T>;
  type: string;
  placeholder?: string;
  label?: string;
  register?: UseFormRegister<T>;
  className?: string;
}

const Input = <T extends FieldValues>({
  id,
  type,
  placeholder,
  label,
  register,
  variant,
  size,
  className,
}: IInput<T> & VariantProps<typeof inputVariants>) => {
  return (
    <div className="flex flex-col gap-2 font-semibold">
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
          }),
          className
        )}
        {...(register ? register(id) : {})}
      />
    </div>
  );
};

export default Input;
