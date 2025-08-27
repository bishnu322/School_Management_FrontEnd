import { useState } from "react";
import SideNav from "../components/sideNav/SideNav";
import SearchField from "../components/attendance/SearchField";
import AttendanceDetail from "../components/attendance/AttendanceDetail";
import MyTable from "../components/attendance/table/Table";
import { RiMenuFill } from "@remixicon/react";

const people = [
  {
    firstName: "Bishnu",
    lastName: "Kohar",
    role: "Student",
    present: 24,
    absent: 2,
    leave: 4,
    status: "Active",
    remainingLeave: 2,
  },
  {
    firstName: "Abhishek",
    lastName: "Shrestha",
    role: "Teacher",
    present: 22,
    absent: 0,
    leave: 1,
    status: "Active",
    remainingLeave: 10,
  },
  {
    firstName: "Murari",
    lastName: "Gupta",
    role: "Accountant",
    present: 22,
    absent: 0,
    leave: 1,
    status: "Active",
    remainingLeave: 8,
  },
  {
    firstName: "Sita",
    lastName: "Sharma",
    role: "Student",
    present: 22,
    absent: 0,
    leave: 1,
    status: "Inactive",
    remainingLeave: 0,
  },
];

const Attendance = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#1E2938]">
      {/* Sidebar (desktop) */}
      <div className="hidden sm:block">
        <SideNav />
      </div>

      {/* Sidebar (mobile drawer) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0A2335] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <SideNav />
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-5 p-5 sm:m-5 sm:ml-0 rounded">
        {/* Mobile top bar */}
        <div className="sm:hidden flex items-center justify-between h-14 mb-2">
          <h1 className="text-lg font-bold text-white">Attendance</h1>
          <RiMenuFill
            size={28}
            className="text-white cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Page content */}
        <SearchField />
        <AttendanceDetail />
        <MyTable data={people} />
      </div>
    </div>
  );
};

export default Attendance;
