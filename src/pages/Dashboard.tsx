import AttendanceGraph from "../components/AttendanceGraph";
import {
  RiGraduationCapFill,
  RiMoneyRupeeCircleFill,
  RiPresentationFill,
} from "@remixicon/react";
import SideNav from "../components/SideNav";

const adminDashboardConfig = {
  calculationCard: [
    {
      title: "Total Student",
      data: 64,
      subTitle: "Active enrolment",
      Icon: RiGraduationCapFill,
      // bg: "indigo-600",
      hoverBg: "green-500",
    },
    {
      title: "Total Staff",
      data: 55,
      subTitle: "Active enrolment",
      Icon: RiPresentationFill,
      // bg: "orange-700",
      hoverBg: "green-500",
    },
    {
      title: "Total Collection",
      data: "200,000",
      subTitle: "Active enrolment",
      Icon: RiMoneyRupeeCircleFill,
      // bg: "violet-700",
      hoverBg: "green-500",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <div>
        <SideNav />
      </div>
      <div className="m-5 p-5 flex flex-col gap-5  w-[80vw] bg-[#1E2938] rounded">
        <div className="bg-[#364152] p-3 rounded ">
          <h1 className="text-2xl font-bold text-gray-300">Admin Dashboard</h1>
          <p className="text-sm text-gray-400">
            Welcome ! All data about your institution is fetched...
          </p>
        </div>

        <div className="bg-[#364152] p-3 rounded  flex justify-between">
          {adminDashboardConfig.calculationCard.map(
            ({ title, data, subTitle, Icon }) => (
              <div
                key={title}
                className={`bg-[#1E2938] rounded text-gray-300 text-sm px-5 py-4 w-74 flex items-center justify-between transition duration-500 ease-in-out hover:bg-gray-600 hover:text-gray-200 cursor-pointer `}
              >
                <div className="px-2 font-bold ">
                  <p>{title}</p>
                  <h1 className="text-2xl ">
                    {" "}
                    <span></span> {data}
                  </h1>
                  <div className="text-sm flex ">
                    <div>{/* <RiArrowDropUpFill /> */}</div>
                    <p>{subTitle}</p>
                  </div>
                </div>
                <div>
                  <Icon size={"45px"} />
                </div>
              </div>
            )
          )}
        </div>

        <div>
          <AttendanceGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
