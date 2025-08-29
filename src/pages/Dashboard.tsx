import AttendanceGraph from "../components/attendenceGraph/AttendanceGraph";
import {
  RiGraduationCapFill,
  RiMoneyRupeeCircleFill,
  RiPresentationFill,
} from "@remixicon/react";
import SideNav from "../components/sideNav/SideNav";

const adminDashboardConfig = {
  calculationCard: [
    {
      title: "Total Student",
      data: 64,
      subTitle: "Active enrolment",
      Icon: RiGraduationCapFill,
      hoverBg: "green-500",
    },
    {
      title: "Total Staff",
      data: 55,
      subTitle: "Active enrolment",
      Icon: RiPresentationFill,
      hoverBg: "green-500",
    },
    {
      title: "Total Collection",
      data: "200,000",
      subTitle: "Active enrolment",
      Icon: RiMoneyRupeeCircleFill,
      hoverBg: "green-500",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className=" md:m-5 p-3 md:p-5 flex flex-col gap-5  bg-[#1E2938] rounded">
      {/* Header */}
      <div className="bg-[#364152] p-3 rounded">
        <h1 className="text-xl md:text-2xl font-bold text-gray-300">
          Admin Dashboard
        </h1>
        <p className="text-xs md:text-sm text-gray-400">
          Welcome! All data about your institution is fetched...
        </p>
      </div>

      {/* Cards */}
      <div className="bg-[#364152] p-3 rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {adminDashboardConfig.calculationCard.map(
          ({ title, data, subTitle, Icon }) => (
            <div
              key={title}
              className="bg-[#1E2938] rounded text-gray-300 text-sm px-5 py-4 flex items-center justify-between transition duration-300 hover:bg-gray-600 hover:text-gray-200 cursor-pointer"
            >
              <div className="px-2 font-bold">
                <p>{title}</p>
                <h1 className="text-xl md:text-2xl">
                  <span>{data}</span>
                </h1>
                <div className="text-xs md:text-sm">
                  <p>{subTitle}</p>
                </div>
              </div>
              <div>
                <Icon size={"35px"} className="md:size-[45px]" />
              </div>
            </div>
          )
        )}
      </div>

      {/* Attendance Graph */}
      <div className="bg-[#364152] p-3 rounded">
        <AttendanceGraph />
      </div>
    </div>
  );
};

export default Dashboard;
