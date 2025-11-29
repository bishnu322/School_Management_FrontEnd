import SearchField from "../components/attendance/SearchField";
import AttendanceDetail from "../components/attendance/AttendanceDetail";
import MyTable from "../components/attendance/table/Table";
import { useQuery } from "@tanstack/react-query";
import { studentApi } from "../api/student/studentApi";
import { useState } from "react";
import DatePicker from "../components/attendance/DatePicker";

const Attendance = () => {
  const [search, setSearch] = useState("");
  const [currentDateValue, setCurrentDateValue] = useState("");

  const { data: studentData, isLoading } = useQuery({
    queryFn: () =>
      studentApi({
        query: search,
      }),
    queryKey: ["Search", search],
  });

  if (isLoading) return <div>Loading...</div>;
  console.log({ studentData });

  return (
    <div className="flex flex-col gap-5 m-5 p-5  bg-[#1E2938] rounded">
      {/* Page content */}
      <SearchField search={search} setSearch={setSearch} />

      <AttendanceDetail />

      <DatePicker setCurrentDateValue={setCurrentDateValue} />

      <MyTable
        data={studentData?.data ?? []}
        currentDateValue={currentDateValue}
      />
    </div>
  );
};

export default Attendance;
