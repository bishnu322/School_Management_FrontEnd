const DropDown = () => {
  return (
    <div className="flex flex-col  gap-2 font-semibold w-60">
      <label htmlFor="Role">Choose a Role</label>
      <select
        className="py-2 px-4 bg-gray-300 text-gray-900 outline-0 rounded"
        name="Role"
        id="Role"
      >
        <option value="STUDENT">STUDENT</option>
      </select>
    </div>
  );
};

export default DropDown;
