import SearchField from "../components/attendance/SearchField";
import AttendanceDetail from "../components/attendance/AttendanceDetail";
import MyTable from "../components/attendance/table/Table";
import { useQuery } from "@tanstack/react-query";
import { studentApi } from "../api/student/studentApi";

const Attendance = () => {
  const { data: studentData } = useQuery({
    queryFn: () => studentApi(),
    queryKey: ["fetch_student_data"],
  });

  // const person = studentData?.data ?? [];

  return (
    <div className="flex flex-col gap-5 m-5 p-5  bg-[#1E2938]  rounded">
      <div className="sm:hidden flex items-center justify-between h-14 mb-2">
        <h1 className="text-lg font-bold text-white">Attendance</h1>
      </div>

      {/* Page content */}
      <SearchField />
      <AttendanceDetail />
      <MyTable data={studentData?.data ?? []} />
    </div>
  );
};

export default Attendance;
