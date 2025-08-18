import { RiMenuFill } from "@remixicon/react";
import UserRegistration from "../components/userRegistration/UserRegistration";

const ManageStudent = () => {
  return (
    <div className="w-full text-gray-300 p-5">
      {/* manage student title */}
      <div className="flex items-center gap-2">
        <RiMenuFill size={"25px"} />
        <div className="title">
          <h1 className="text-2xl font-semibold font-sans text-green-600">
            Manage Students
          </h1>
          <p className="text-sm text-gray-500">
            All Students can be managed here ...
          </p>
        </div>
      </div>
      {/* user registration data */}
      <div className="mt-10 bg-gray-800 rounded">
        <UserRegistration />
      </div>
    </div>
  );
};

export default ManageStudent;
