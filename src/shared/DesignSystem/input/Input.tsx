interface IInput {
  id: string;
  type: string;
  placeholder?: string;
  label: string;
}

const Input = ({ id, type, placeholder, label }: IInput) => {
  return (
    <div>
      <div className="flex flex-col  gap-2 font-semibold w-60">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="py-2 px-3 bg-gray-300 text-gray-900 outline-0 rounded"
        />
      </div>
    </div>
  );
};

export default Input;
