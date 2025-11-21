import { useEffect, useState } from "react";

interface IAttendanceSelectorProps {
  upsertAttendanceHandler: (status: "ABSENT" | "PRESENT") => void;
  defaultValue: string;
}

export const AttendanceSelector = ({
  upsertAttendanceHandler,
  defaultValue,
}: IAttendanceSelectorProps) => {
  const [attendance, setAttendance] = useState(defaultValue);

  console.log({ attendance });

  useEffect(() => {
    if (!attendance) return;

    upsertAttendanceHandler(attendance as "ABSENT" | "PRESENT");
  }, [attendance, upsertAttendanceHandler]);

  return (
    <select onChange={(e) => setAttendance(e.target.value)}>
      <option value="">A/B</option>
      <option value="PRESENT">Present</option>
      <option value="ABSENT">Absent</option>
    </select>
  );
};
