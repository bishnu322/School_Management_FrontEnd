import {
  RiDashboardHorizontalFill,
  RiDashboard3Line,
  RiUser3Fill,
  RiGraduationCapFill,
  RiPresentationFill,
  RiMoneyRupeeCircleFill,
  RiCalendar2Fill,
  RiLogoutBoxRLine,
} from "@remixicon/react";
import { NavLink, useNavigate } from "react-router";
import { logoutApi } from "../../api/auth/auth.api";

const sideNavConfig = {
  navLinks: [
    { Icon: RiDashboard3Line, label: "Dashboard", to: "/" },
    { Icon: RiUser3Fill, label: "Manage User", to: "/admin" },
    { Icon: RiGraduationCapFill, label: "Student", to: "/student" },
    { Icon: RiPresentationFill, label: "Manage Staffs", to: "/admin" },
    { Icon: RiMoneyRupeeCircleFill, label: "Manage Payment", to: "/payment" },
    { Icon: RiCalendar2Fill, label: "Attendance", to: "/attendance" },
    { Icon: RiLogoutBoxRLine, label: "Logout", action: "logout" }, // 👈 special case
  ],
};

const SideNav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutApi(); // clear cookie on backend
      navigate("/login"); // redirect to login
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="h-full bg-[#0A2335] text-gray-200 w-[250px]">
      {/* Header */}
      <div className="flex justify-between items-center p-5 text-2xl font-semibold">
        <div className="flex gap-2 items-center">
          <RiDashboardHorizontalFill />
          Dashboard
        </div>
      </div>

      {/* Nav Links */}
      <div className="mt-4">
        {sideNavConfig.navLinks.map(({ Icon, label, to, action }) =>
          action === "logout" ? (
            <button
              key={label}
              onClick={handleLogout}
              className="flex w-full gap-2 py-3 px-5 font-semibold hover:bg-[#4d5c67] hover:text-gray-300 text-left"
            >
              <Icon />
              <div>{label}</div>
            </button>
          ) : (
            <NavLink
              key={label}
              to={to!}
              className="flex gap-2 py-3 px-5 font-semibold hover:bg-[#4d5c67] hover:text-gray-300"
            >
              <Icon />
              <div>{label}</div>
            </NavLink>
          )
        )}
      </div>
    </div>
  );
};

export default SideNav;
