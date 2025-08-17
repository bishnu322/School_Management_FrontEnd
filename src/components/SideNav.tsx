import {
  RiCalendar2Fill,
  RiDashboard3Line,
  RiDashboardHorizontalFill,
  RiGraduationCapFill,
  RiMoneyRupeeCircleFill,
  RiPresentationFill,
} from "@remixicon/react";

const sideNavConfig = {
  navLinks: [
    {
      Icon: RiDashboard3Line,
      link: "Dashboard",
    },
    {
      Icon: RiGraduationCapFill,
      link: "Manage Student",
    },

    {
      Icon: RiPresentationFill,
      link: "Manage Staffs",
    },
    {
      Icon: RiMoneyRupeeCircleFill,
      link: "Manage payment",
    },
    {
      Icon: RiCalendar2Fill,
      link: "Attendance ",
    },
  ],
};

const SideNav = () => {
  return (
    <div className="w-[20vw] bg-[#0A2335] h-full py-5 text-gray-200">
      <div className="text-2xl font-semibold flex gap-2 items-center px-5">
        <RiDashboardHorizontalFill />
        DashBoard
      </div>

      <ul className="mt-4">
        {sideNavConfig.navLinks.map(({ Icon, link }) => (
          <li
            key={link}
            className="py-3 px-5 flex gap-2 font-semibold hover:bg-[#4d5c67] hover:text-gray-300 "
          >
            <Icon />
            <p>{link}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
