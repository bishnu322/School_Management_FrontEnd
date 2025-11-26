// // import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getStudentByIdApi } from "../../api/student/studentApi";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useState } from "react";

interface IProps {
  name?: string;
  setUpdateAttendanceSection: (value: boolean) => void;
  user_id: string;
}

// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(date);
// };

const UpdateAttendance: React.FC<IProps> = ({
  // name = "default",
  setUpdateAttendanceSection,
  user_id,
}) => {
  // fetching individual student data
  const { data, isLoading } = useQuery({
    queryKey: ["getStudentByIdApi"],
    queryFn: () => getStudentByIdApi(user_id),
  });

  // memoizing created and updated data of the student
  // const formattedDates = useMemo(() => {
  //   if (!data?.data.user_id) return { date: "" };

  //   return {
  //     date: formatDate(data.data.user_id.date),
  //   };
  // }, [data?.data.user_id]);

  if (isLoading) return <div>loading..</div>;

  console.log("Attendance Data", data.data.user.first_name);

  return (
    <main
      className="bg-gray-300/50 backdrop-blur-[1px] absolute inset-0 h-full w-full 
                    flex justify-center items-center "
    >
      <div className="min-h-1/4 w-lg bg-gray-600 p-5 rounded flex flex-col gap-4 text-gray-300">
        <div className="flex justify-between items-center">
          {/* header of the update section */}
          <div className="text-gray-300 font-semibold border  px-2 py-1 rounded bg-gray-700">
            User Attendance Details
          </div>

          {/* this icon is used to close the opened update component */}
          <CloseIcon
            sx={{ color: "red" }}
            onClick={() => setUpdateAttendanceSection(false)}
          />
        </div>

        {/* main body of update section */}
        <div>
          <div>
            <span>Name: </span>

            {data.data?.user?.first_name && data.data?.user?.last_name
              ? `${data.data.user.first_name} ${data.data.user.last_name}`
              : "N/A"}
          </div>

          <table className="min-w-full rounded bg-[#364152] text-gray-300 text-left mt-1">
            <thead className="bg-gray-900 text-md text-gray-400 text-center">
              <tr>
                <th className="border-r border-gray-500 px-4 py-2">Date</th>
                <th className="border-r border-gray-500 px-4 py-2">Status</th>
                <th className="border-r border-gray-500 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.attendance
                ? data?.data.attendance.map((attendance, index) => (
                    <tr
                      className="hover:bg-gray-600 text-sm border-b border-gray-600"
                      key={index}
                    >
                      <td className="border-r border-gray-600 px-4 py-2">
                        {attendance.date}
                      </td>
                      <td className="border-r border-gray-600 px-4 py-2">
                        {attendance.status}
                      </td>
                      <td className="border-r border-gray-600 px-4 py-2">
                        fej
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>

        {/* update button of attendance */}
        <Button variant="contained">Update</Button>
      </div>
    </main>
  );
};

export default UpdateAttendance;
