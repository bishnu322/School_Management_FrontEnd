import {
  RiCalendar2Fill,
  RiDashboard3Line,
  RiDashboardHorizontalFill,
  RiGraduationCapFill,
  RiMenuFill,
  RiMoneyRupeeCircleFill,
  RiPresentationFill,
  RiUser3Fill,
} from "@remixicon/react";
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
      to: "/student",
    },

    {
      Icon: RiPresentationFill,
      link: "Manage Staffs",
      to: "/admin",
    },
    {
      Icon: RiMoneyRupeeCircleFill,
      link: "Manage payment",
      to: "/payment",
    },
    {
      Icon: RiCalendar2Fill,
      link: "Attendance ",
      to: "/attendance",
    },
  ],
};

const SideNav = () => {
  // const [toggleSideNav, setToggleSideNav] = useState(true);

  // console.log(toggleSideNav);

  // if (!toggleSideNav) return null;

  return (
    <div
      className={` w-full fixed sm:w-[300px] sm:static z-100 bg-[#0A2335] h-full  py-5 text-gray-200`}
    >
      <div className="text-2xl font-semibold flex justify-between gap-2 items-center px-5">
        <div className="flex gap-2 items-center">
          <RiDashboardHorizontalFill />
          DashBoard
        </div>
        <RiMenuFill
          size={"25px"}
          // onClick={() => setToggleSideNav(!toggleSideNav)}
        />
      </div>

      <div className="mt-4">
        {sideNavConfig.navLinks.map(({ Icon, link, to }) => (
          <NavLink
            key={link}
            to={to}
            className={`flex gap-2 py-3 px-5  font-semibold hover:bg-[#4d5c67] hover:text-gray-300`}
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
