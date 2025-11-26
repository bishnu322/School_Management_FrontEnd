// AttendanceSelector.tsx
// import { useMemo } from "react";
import type { IUserAttendance } from "./Table";
// import { useQuery } from "@tanstack/react-query";

interface IAttendanceSelectorProps {
  user_id: string;
  userData?: IUserAttendance[];
  defaultValue?: "" | "ABSENT" | "PRESENT";
  upsertAttendanceHandler: (
    status: "" | "ABSENT" | "PRESENT",
    user_id: string
  ) => void;
}

export const AttendanceSelector = ({
  defaultValue,
  user_id,
  // userData,
  upsertAttendanceHandler,
}: IAttendanceSelectorProps) => {
  // const attendanceValue = useMemo(() => {
  //   return userData?.find((user) => user.user_id === user_id)?.status;
  // }, [userData, user_id]);

  return (
    <select
      value={defaultValue}
      onChange={(e) => {
        const value = e.target.value as "ABSENT" | "PRESENT";
        upsertAttendanceHandler(value, user_id);
      }}
      className="text-gray-300 px-2 py-1 rounded"
    >
      <option value="">P / A</option>
      <option value="PRESENT">Present</option>
      <option value="ABSENT">Absent</option>
    </select>
  );
};
