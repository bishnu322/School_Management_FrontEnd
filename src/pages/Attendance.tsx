import SideNav from "../components/sideNav/SideNav";
import SearchField from "../components/attendance/SearchField";
import AttendanceDetail from "../components/attendance/AttendanceDetail";
import MyTable from "../components/attendance/table/Table";

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
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#1E2938]">
      {/* Sidebar (desktop) */}
      <div className="hidden sm:block">
        <SideNav />
      </div>

      <div className="flex flex-col gap-5 m-5 p-5  bg-[#1E2938] w-full rounded">
        <div className="sm:hidden flex items-center justify-between h-14 mb-2">
          <h1 className="text-lg font-bold text-white">Attendance</h1>
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
