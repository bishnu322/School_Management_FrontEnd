import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { AttendanceSelector } from "./table/AttendanceSelector";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

const UpdateAttendance = ({ name = "default", setUpdateAttendanceSection }) => {
  const [closeButtonToggle, setCloseButtonToggle] = useState(false);

  return (
    <div
      className="bg-gray-300/50 backdrop-blur-[1px] absolute inset-0 h-full w-full 
                    flex justify-center items-center "
    >
      <div className="min-h-1/4 w-md bg-gray-600 p-5 rounded flex flex-col gap-4 text-gray-300">
        <div className="flex justify-between items-center">
          <DatePicker />
          <CloseIcon
            sx={{ color: "red" }}
            onClick={() => setUpdateAttendanceSection(false)}
          />
        </div>

        <div>Name: {name}</div>
        <div>
          Status: <AttendanceSelector />
        </div>

        <Button variant="contained">Update</Button>
      </div>
    </div>
  );
};

export default UpdateAttendance;
