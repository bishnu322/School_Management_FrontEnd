import {
  RiDashboardHorizontalFill,
  RiDashboard3Line,
  RiUser3Fill,
  RiGraduationCapFill,
  RiPresentationFill,
  RiMoneyRupeeCircleFill,
  RiCalendar2Fill,
} from "@remixicon/react";
import { NavLink } from "react-router";

const sideNavConfig = {
  navLinks: [
    { Icon: RiDashboard3Line, link: "Dashboard", to: "/" },
    { Icon: RiUser3Fill, link: "Manage User", to: "/admin" },
    { Icon: RiGraduationCapFill, link: "Student", to: "/student" },
    { Icon: RiPresentationFill, link: "Manage Staffs", to: "/admin" },
    { Icon: RiMoneyRupeeCircleFill, link: "Manage Payment", to: "/payment" },
    { Icon: RiCalendar2Fill, link: "Attendance", to: "/attendance" },
  ],
};

const SideNav = () => {
  return (
    <div
      className={`h-full  bg-[#0A2335] text-gray-200 transition-transform duration-300 w-[250px]`}
    >
      <div className="flex justify-between items-center p-5 text-2xl font-semibold">
        <div className="flex gap-2 items-center">
          <RiDashboardHorizontalFill />
          DashBoard
        </div>
        {/* <RiMenuFill
          size={25}
          className="sm:hidden cursor-pointer"
          onClick={toggle}
        /> */}
      </div>

      <div className="mt-4">
        {sideNavConfig.navLinks.map(({ Icon, link, to }) => (
          <NavLink
            key={link}
            to={to}
            className="flex gap-2 py-3 px-5 font-semibold hover:bg-[#4d5c67] hover:text-gray-300"
            // close on mobile click
          >
            <Icon />
            <div>{link}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
