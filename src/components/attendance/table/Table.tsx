// src/components/MyTable.tsx
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface Person {
  firstName: string;
  lastName: string;
  role: string;
  present: number;
  absent: number;
  leave: number;
  status: string;
  remainingLeave: number;
}

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    header: "First Name",
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),

  columnHelper.accessor("present", {
    header: "Present",
  }),
  columnHelper.accessor("absent", {
    header: "Absent",
  }),
  columnHelper.accessor("leave", {
    header: "Leave",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("remainingLeave", {
    header: "Remaining Leave",
  }),

  // ... more columns
];

function MyTable({ data }: { data: Person[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="overflow-hidden rounded min-w-full divide-y divide-gray-200 ">
      <thead className="bg-gray-700">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-6 py-4 text-left text-xs  text-gray-100 font-bold uppercase tracking-wider "
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 ">
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="transition-all duration-200 cursor-pointer hover:bg-[#b5c0c8]"
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="text-sm px-6 py-2 whitespace-nowrap "
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
