import UserRegistration from "../components/UserRegistration";

const ManageStudent = () => {
  return (
    <div className="w-[80vw] text-gray-300 p-5">
      {/* manage student title */}
      <div className="title">
        <h1 className="text-2xl font-semibold font-sans text-green-600">
          Manage Students
        </h1>
        <p className="text-sm text-gray-500">
          All Students can be managed here ...
        </p>
      </div>
      {/* user registration data */}
      <div className="mt-10 bg-gray-800 rounded">
        <UserRegistration />
      </div>
    </div>
  );
};

export default ManageStudent;
