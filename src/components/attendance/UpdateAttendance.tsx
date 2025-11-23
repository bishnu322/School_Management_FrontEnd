// import { useQuery } from "@tanstack/react-query";
import DatePicker from "./DatePicker";
import { AttendanceSelector } from "./table/AttendanceSelector";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

interface IProps {
  name?: string;
  setUpdateAttendanceSection: (value: boolean) => void;
  user_id: string;
}

const UpdateAttendance: React.FC<IProps> = ({
  name = "default",
  setUpdateAttendanceSection,
  user_id,
}) => {
  const upsertAttendanceHandler = (value: string, user_id: string) => {
    console.log({ value }, { user_id });
  };

  // fetching individual student data
  // const {} = useQuery({
  //   queryFn:
  // })

  return (
    <div
      className="bg-gray-300/50 backdrop-blur-[1px] absolute inset-0 h-full w-full 
                    flex justify-center items-center "
    >
      <div className="min-h-1/4 w-md bg-gray-600 p-5 rounded flex flex-col gap-4 text-gray-300">
        <div className="flex justify-between items-center">
          {/* selecting data from date picker component */}
          <DatePicker />

          {/* this icon is used to close the opened update component */}
          <CloseIcon
            sx={{ color: "red" }}
            onClick={() => setUpdateAttendanceSection(false)}
          />
        </div>

        <div>Name: {name}</div>

        {/* select the status of the attendance */}
        <div>
          Status:
          <AttendanceSelector
            user_id={user_id}
            upsertAttendanceHandler={upsertAttendanceHandler}
          />
        </div>

        {/* update button of attendance */}
        <Button variant="contained">Update</Button>
      </div>
    </div>
  );
};

export default UpdateAttendance;
