import { useState } from "react";
import type { IStudentResponse } from "../../../types/student.type";
import { AttendanceSelector } from "./AttendanceSelector";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { blue, red } from "@mui/material/colors";
import UpdateAttendance from "../UpdateAttendance";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import { useMutation } from "@tanstack/react-query";
import { createStudentAttendance } from "../../../api/attendance";
import toast from "react-hot-toast";

interface MyTableProps {
  data: IStudentResponse[];
  currentDateValue: string;
}

export interface IUserAttendance {
  user_id: string;
  status: "" | "ABSENT" | "PRESENT";
}

const MyTable: React.FC<MyTableProps> = ({ data, currentDateValue }) => {
  const [userDate, setUserDate] = useState(currentDateValue);
  const [userStatus, setUserStatus] = useState("");
  const [updateAttendanceSection, setUpdateAttendanceSection] = useState(false);
  const [user, setUser] = useState("");

  // const [userData, setUserData] = useState<IUserAttendance[]>(
  //   data.map((el) => ({ user_id: el._id, status: "" }))
  // );

  // creating student attendance
  const { mutate } = useMutation({
    mutationFn: ({
      user_id,
      date,
      status,
    }: {
      user_id: string;
      date: string;
      status: string;
    }) => createStudentAttendance(user_id, date, status),

    mutationKey: ["createStudentAttendance"],
    onSuccess: () => {
      toast.success("attendance successfully created.");
    },
    onError: () => {
      toast.error("failed to created attendance");
    },
  });

  const attendanceUpdateHandler = (
    updateAttendanceSectionValue: boolean,
    userValue: string
  ) => {
    setUpdateAttendanceSection(updateAttendanceSectionValue);
    setUser(userValue);
    console.log(updateAttendanceSection, user);
  };

  // accessing data from Attendance selector
  const upsertAttendanceHandler = (
    status: "" | "ABSENT" | "PRESENT",
    user_id: string
  ) => {
    // const newUserData = [...userData];
    // newUserData.map((el) => {
    //   if (el.user_id === user_id) {
    //     el.status = status;
    //   }
    // });
    // setUserData(newUserData);

    if (!status) return;

    console.log("Creating attendance:", {
      status,
      user_id,
      date: currentDateValue,
    });

    // assigning the value to user_id status and selected date
    setUserStatus(status);
    setUserDate(currentDateValue);
    setUser(user_id);

    // calling mutation function to mutate data
    mutate({
      user_id,
      date: currentDateValue,
      status,
    });
  };

  console.log(userDate, userStatus, user);

  return (
    <div className=" overflow-hidden rounded min-w-full divide-y divide-gray-200">
      <table className="min-w-full rounded bg-[#364152] text-gray-300 text-left">
        <thead className="bg-gray-900 text-md text-gray-400 text-center">
          <tr>
            <th className="border-r border-gray-500 px-4 py-2">Name</th>
            <th className="border-r border-gray-500 px-4 py-2">Email</th>
            <th className="border-r border-gray-500 px-4 py-2">Gender</th>
            <th className="border-r border-gray-500 px-4 py-2">Phone Number</th>
            <th className="border-r border-gray-500 px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((value, index) => (
            <tr
              key={index}
              className="hover:bg-gray-600 text-sm border-b border-gray-600"
            >
              <td className="border-r border-gray-600 px-4 py-2">
                {value.user.first_name} {value.user.last_name}
              </td>

              <td className="border-r border-gray-600 px-4 py-2">
                {value.user.email}
              </td>

              <td className="border-r border-gray-600 px-4 py-2">
                {value.user.gender}
              </td>

              <td className="border-r border-gray-500 px-4 py-2">
                {value.user.phone_number}
              </td>

              <td className="border-r border-gray-500 text-center px-4 py-2">
                <AttendanceSelector
                  user_id={value.user._id}
                  upsertAttendanceHandler={upsertAttendanceHandler}
                />
              </td>

              <td className="text-center px-4 flex justify-center items-center">
                <IconButton
                  onClick={() => attendanceUpdateHandler(true, value._id)}
                  sx={{ color: blue[400] }}
                  size="small"
                >
                  <EditDocumentIcon fontSize="small" />
                </IconButton>

                <IconButton sx={{ color: red[400] }}>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-2">
        <Button variant="contained" sx={{ padding: "5px 30px" }}>
          Submit
        </Button>
      </div>

      {updateAttendanceSection ? (
        <UpdateAttendance
          user_id={user}
          setUpdateAttendanceSection={setUpdateAttendanceSection}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MyTable;
