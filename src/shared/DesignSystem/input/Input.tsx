import type { FieldValues, UseFormRegister } from "react-hook-form";

interface IInput {
  id: string;
  type: string;
  placeholder?: string;
  label: string;
  register: UseFormRegister<FieldValues>;
}

const Input = ({ id, type, placeholder, label, register }: IInput) => {
  return (
    <div>
      <div className="flex flex-col  gap-2 font-semibold w-60">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="py-2 px-3 bg-gray-300 text-gray-900 outline-0 rounded"
          {...register(id)}
        />
      </div>
    </div>
  );
};

export default Input;
