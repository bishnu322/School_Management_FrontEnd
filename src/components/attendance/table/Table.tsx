import { useMutation } from "@tanstack/react-query";
import {
  upsertAttendance,
  type IUpsertAttendance,
} from "../../../api/attendance";
import { AttendanceSelector } from "./AttendanceSelector";

interface Person {
  user_id: {
    first_name: string;
    last_name: string;
    role: {
      role: string;
    };
    email: string;
    gender: string;
    phone_number: string;
  };
}

function MyTable({ data }: { data: Person[] }) {
  //   const { mutate } = useMutation({
  //     mutationFn: (payload: IUpsertAttendance) => upsertAttendance(payload),
  //     onSuccess: (response: any) => {
  //       console.log(response.data);
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   });

  // const upsertAttendanceHandler = (value: "ABSENT" | "PRESENT", index: string) => {
  //   mutate({
  //     type: "create",
  //     user_id: ,
  //     date: "",
  //     status: value,
  //     id: "",x
  //   });
  // };

  // console.log({ data });
  return (
    // <table className="overflow-hidden rounded min-w-full divide-y divide-gray-200 ">
    <table className="min-w-full  rounded  bg-[#364152] text-gray-300 text-left">
      <thead className="bg-gray-900 text-md text-gray-400">
        <tr>
          <th className="border-r border-gray-500 px-4 py-2">First Name</th>
          <th className="border-r border-gray-500 px-4 py-2">Last Name</th>
          <th className="border-r  border-gray-500 px-4 py-2">Email</th>
          <th className="border-r  border-gray-500 px-4 py-2">Gender</th>
          <th className="border-r  border-gray-500 px-4 py-2">Phone Number</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((value, index) => (
          <tr key={index} className="hover:bg-gray-600 text-sm">
            <td className="border-r border-gray-600 px-4 py-2">
              {value.user.first_name}
            </td>
            <td className="border-r border-gray-600   px-4 py-2">
              {value.user.last_name}
            </td>
            <td className="border-r border-gray-600   px-4 py-2">
              {value.user.email}
            </td>
            <td className="border-r border-gray-600   px-4 py-2">
              {value.user.gender}
            </td>
            <td className="border-r  border-gray-500  px-4 py-2">
              {value.user.phone_number}
            </td>
            <td className="  px-4 py-2">
              <AttendanceSelector
                index
                upsertAttendanceHandler={upsertAttendanceHandler}
                defaultValue=""
              />
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
    // </table>
  );
}

export default MyTable;
