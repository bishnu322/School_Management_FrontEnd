import SearchField from "../components/attendance/SearchField";
import AttendanceDetail from "../components/attendance/AttendanceDetail";
import MyTable from "../components/attendance/table/Table";
import { useQuery } from "@tanstack/react-query";
import { studentApi } from "../api/student/studentApi";
import { useState } from "react";
import DatePicker from "../components/attendance/DatePicker";

const Attendance = () => {
  const [search, setSearch] = useState("");

  const { data: studentData } = useQuery({
    queryFn: () =>
      studentApi({
        query: search,
      }),
    queryKey: ["Search", search],
    // enabled: search.length > 0,
  });

  return (
    <div className="flex flex-col gap-5 m-5 p-5  bg-[#1E2938]  rounded">
      <div className="sm:hidden flex items-center justify-between h-14 mb-2">
        <h1 className="text-lg font-bold text-white">Attendance</h1>
      </div>
      {/* Page content */}
      <SearchField search={search} setSearch={setSearch} />

      <AttendanceDetail />

      <DatePicker />

      <MyTable data={studentData?.data ?? []} />
    </div>
  );
};

export default Attendance;
