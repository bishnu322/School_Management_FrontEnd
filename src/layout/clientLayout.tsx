import { Outlet } from "react-router";
import SideNav from "../components/sideNav/SideNav";

const ClientLayout = () => {
  return (
    <div className="flex w-full h-full">
      <div>
        <SideNav />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
