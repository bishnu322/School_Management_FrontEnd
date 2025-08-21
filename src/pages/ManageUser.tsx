// import { RiMenuFill } from "@remixicon/react";
import UserRegistration from "../components/userRegistration/UserRegistration";

const ManageStudent = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* manage student title */}
      <div className="title p-4 bg-[#364152] rounded shadow-xl">
        <h1 className="text-2xl font-semibold font-sans text-gray-300">
          Manage Students
        </h1>
        <p className="text-sm text-gray-500">
          All Students can be managed here ...
        </p>
      </div>

      {/* user registration data */}
      <div className=" py-3 bg-[#364152] rounded shadow-xl">
        <UserRegistration />
      </div>
    </div>
  );
};

export default ManageStudent;
