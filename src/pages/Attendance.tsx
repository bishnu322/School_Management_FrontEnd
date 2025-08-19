import AttendanceDetail from "../components/attendance/AttendanceDetail";
import SearchField from "../components/attendance/SearchField";
import MyTable from "../components/attendance/table/Table";
import SideNav from "../components/SideNav";

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
  return (
    <div className="flex justify-between  h-full">
      <div>
        <SideNav />
      </div>
      <div className="flex flex-col gap-5 p-5 m-5 bg-[#1E2938] w-full rounded">
        <SearchField />

        <AttendanceDetail />

        <MyTable data={people} />
      </div>
    </div>
  );
};

export default Attendance;
