import {
  RiCalendar2Fill,
  RiDashboard3Line,
  RiDashboardHorizontalFill,
  RiGraduationCapFill,
  RiMoneyRupeeCircleFill,
  RiPresentationFill,
  RiUser3Fill,
} from "@remixicon/react";
import { useState } from "react";
import { NavLink } from "react-router";

const sideNavConfig = {
  navLinks: [
    {
      Icon: RiDashboard3Line,
      link: "Dashboard",
      to: "/dashboard",
    },
    {
      Icon: RiUser3Fill,
      link: "Manage User",
      to: "/admin",
    },
    {
      Icon: RiGraduationCapFill,
      link: "Student",
      to: "/admin",
    },

    {
      Icon: RiPresentationFill,
      link: "Manage Staffs",
      to: "/admin",
    },
    {
      Icon: RiMoneyRupeeCircleFill,
      link: "Manage payment",
      to: "/admin",
    },
    {
      Icon: RiCalendar2Fill,
      link: "Attendance ",
      to: "/admin",
    },
  ],
};

const SideNav = () => {
  const [toggleSideNav, setToggleSideNav] = useState(false);

  return (
    <div className="w-full fixed sm:w-[300px] sm:static z-100 bg-[#0A2335] h-full min-h-[100vh] py-5 text-gray-200">
      <div className="text-2xl font-semibold flex gap-2 items-center px-5">
        <RiDashboardHorizontalFill />
        DashBoard
      </div>

      <ul className="mt-4">
        {sideNavConfig.navLinks.map(({ Icon, link, to }) => (
          <NavLink
            key={link}
            to={to}
            className={`flex gap-2 py-3 px-5  font-semibold hover:bg-[#4d5c67] hover:text-gray-300`}
          >
            <Icon />
            <p>{link}</p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
