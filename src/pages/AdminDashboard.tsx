// import Dashboard from "../components/Dashboard";
import SideNav from "../components/sideNav/SideNav";
import ManageStudent from "./ManageUser";

const AdminDashboard = () => {
  return (
    <div className=" h-full w-full  flex justify-between ">
      <div>
        <SideNav />
      </div>
      {/* <Dashboard /> */}
      <div className="flex flex-col gap-5 p-5 m-5  bg-[#1E2938] w-full rounded">
        <ManageStudent />
      </div>
    </div>
  );
};

export default AdminDashboard;
