// const roleOptionsConfig = {
//   roleOption: [
//     {
//       title: "SUPER_ADMIN",
//     },
//     {
//       title: "ADMIN",
//     },
//     {
//       title: "STUDENT",
//     },
//     {
//       title: "TEACHER",
//     },
//     {
//       title: "ACCOUNTANT",
//     },
//   ],
// };

// import type { UseFormRegister } from "react-hook-form";

interface DropDownOption {
  title: string;
}

interface DropDownProps {
  dropdownOptions: DropDownOption[];
  title: string;
  id: string;
  onChange: (value: string) => void;
  // register: UseFormRegister<any>;
}

const DropDown: React.FC<DropDownProps> = ({
  dropdownOptions,
  title,
  id,
  onChange,
  // register,
}) => {
  return (
    <div className="flex flex-col  gap-2 font-semibold w-60">
      <label htmlFor={id}>{title}</label>
      <select
        className="py-2 px-4 bg-gray-300 text-gray-900 outline-0 rounded"
        // name={id}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        // {...register(`${id}`)}
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
