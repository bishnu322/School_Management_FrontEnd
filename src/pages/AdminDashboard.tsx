// import Dashboard from "../components/Dashboard";
import SideNav from "../components/SideNav";
import ManageStudent from "./ManageStudent";

const AdminDashboard = () => {
  return (
    <div className=" h-full flex ">
      <SideNav />
      {/* <Dashboard /> */}
      <ManageStudent />
    </div>
  );
};

export default AdminDashboard;
