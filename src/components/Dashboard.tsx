import AttendanceGraph from "../components/AttendanceGraph";
import { RiGraduationCapFill } from "@remixicon/react";
import SideNav from "./SideNav";

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
      title: "Present Student",
      data: 55,
      subTitle: "Active enrolment",
      Icon: RiGraduationCapFill,
      // bg: "orange-700",
      hoverBg: "green-500",
    },
    {
      title: "Absent Student",
      data: 9,
      subTitle: "Active enrolment",
      Icon: RiGraduationCapFill,
      // bg: "violet-700",
      hoverBg: "green-500",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="flex gap-3 ">
      <div>
        <SideNav />
      </div>
      <div className="mt-3 p-5 w-[80vw]">
        <div>
          <h1 className="text-2xl font-bold text-green-600">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">
            Welcome ! All data about your institution is fetched...
          </p>
        </div>

        <div className="mt-10 flex justify-between">
          {adminDashboardConfig.calculationCard.map(
            ({ title, data, subTitle, Icon, hoverBg }) => (
              <div
                className={`bg-[#4957EF] rounded text-gray-100 text-sm px-5 py-4 w-74 flex items-center justify-between transition duration-500 ease-in-out hover:bg-${hoverBg} hover:text-green-900 `}
              >
                <div className="px-2 font-bold ">
                  <p>{title}</p>
                  <h1 className="text-2xl ">{data}</h1>
                  <p className="text-sm flex ">
                    <div>{/* <RiArrowDropUpFill /> */}</div>
                    <p>{subTitle}</p>
                  </p>
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
