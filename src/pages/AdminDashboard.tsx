import ManageStudent from "./ManageUser";

const AdminDashboard = () => {
  return (
    <div className="  w-full">
      <div className="flex flex-col gap-5 p-5 m-5  bg-[#1E2938]  rounded">
        <ManageStudent />
      </div>
    </div>
  );
};

export default AdminDashboard;
