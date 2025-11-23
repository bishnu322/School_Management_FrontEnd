// AttendanceSelector.tsx
import { useState, useEffect } from "react";

interface IAttendanceSelectorProps {
  user_id: string;
  defaultValue: "" | "ABSENT" | "PRESENT";
  upsertAttendanceHandler: (
    status: "ABSENT" | "PRESENT",
    user_id: string
  ) => void;
}

export const AttendanceSelector = ({
  user_id,
  defaultValue,
  upsertAttendanceHandler,
}: IAttendanceSelectorProps) => {
  const [attendance, setAttendance] = useState(defaultValue);

  useEffect(() => {
    setAttendance(defaultValue);
  }, [defaultValue]);

  return (
    <select
      value={attendance}
      onChange={(e) => {
        const value = e.target.value as "ABSENT" | "PRESENT";
        setAttendance(value);
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
