// // import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getStudentByIdApi } from "../../api/student/studentApi";
import DatePicker from "./DatePicker";
import { AttendanceSelector } from "./table/AttendanceSelector";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useMemo, useState } from "react";
import { getAttendanceByUserId } from "../../api/attendance";

interface IProps {
  name?: string;
  setUpdateAttendanceSection: (value: boolean) => void;
  user_id: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const UpdateAttendance: React.FC<IProps> = ({
  // name = "default",
  setUpdateAttendanceSection,
  user_id,
}) => {
  const [userStatus, setUserStatus] = useState("");

  // fetching individual student data
  const { data, isLoading } = useQuery({
    queryKey: ["getAttendanceByUserId"],
    queryFn: () => getAttendanceByUserId(user_id),
  });

  // memoizing created and updated data of the student
  const formattedDates = useMemo(() => {
    if (!data?.data.user_id) return { date: "" };

    return {
      createdAt: formatDate(data.data.user_id.date),
      // updatedAt: formatDate(data.data.user_id.updatedAt),
    };
  }, [data?.data.user_id]);

  // until the data is loaded...
  if (isLoading) return <div>Loading...</div>;

  // fetching the attendance status from the child component
  const upsertAttendanceHandler = (status: string) => {
    setUserStatus(status);
  };

  console.log("Attendance Data", data);

  return (
    <main
      className="bg-gray-300/50 backdrop-blur-[1px] absolute inset-0 h-full w-full 
                    flex justify-center items-center "
    >
      <div className="min-h-1/4 w-md bg-gray-600 p-5 rounded flex flex-col gap-4 text-gray-300">
        <div className="flex justify-between items-center">
          {/* selecting data from date picker component */}
          {/* <DatePicker /> */}
          <div>User Attendance Details</div>

          {/* this icon is used to close the opened update component */}
          <CloseIcon
            sx={{ color: "red" }}
            onClick={() => setUpdateAttendanceSection(false)}
          />
        </div>
        {/* 
        <div className="flex justify-between">
          <div>
            <span className="text-gray-400">Name: </span>
            {data?.data.user_id.first_name ?? ""}{" "}
            {data?.data.user_id.last_name ?? " "}
          </div> */}

        {/* select the status of the attendance */}
        <div>
          <span className="text-gray-400">Status: </span>
          <AttendanceSelector
            user_id={user_id}
            upsertAttendanceHandler={upsertAttendanceHandler}
          />
        </div>
        {/* </div> */}

        {/* <div>
          <div>
            <span className="text-gray-400">Created At: </span>
            {formattedDates.createdAt ?? "N/A"}
          </div>
          <div>
            <span className="text-gray-400">Updated At: </span>
            {formattedDates.updatedAt ?? "N/A"}
          </div>
        </div> */}

        {/* update button of attendance */}
        <Button variant="contained">Update</Button>
      </div>
    </main>
  );
};

export default UpdateAttendance;
