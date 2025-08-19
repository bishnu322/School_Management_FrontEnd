import { BarChart } from "@mui/x-charts/BarChart";

const dataset = [
  { month: "Jan", TotalStudent: 64, Present: 39, Absent: 25, Leave: 15 },
  { month: "Feb", TotalStudent: 64, Present: 25, Absent: 30, Leave: 20 },
  { month: "Mar", TotalStudent: 64, Present: 30, Absent: 35, Leave: 25 },
  { month: "Apr", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "May", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "Jun", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "Jul", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "Aug", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "Sep", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "Oct", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "Nov", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
  { month: "Dec", TotalStudent: 64, Present: 35, Absent: 40, Leave: 30 },
];

const valueFormatter = (value: number | null | undefined) =>
  value != null ? `${value}` : "";

const AttendanceGraph = () => {
  return (
    <div className=" bg-[#364152] rounded ">
      <BarChart
        dataset={dataset}
        // xAxis={[{ dataKey: "month" }]}
        xAxis={[
          {
            dataKey: "month",
            label: "Month",
            sx: {
              ".MuiChartsAxis-tickLabel": { fill: "#fff" }, // tick labels white
              ".MuiChartsAxis-line": { stroke: "#fff" }, // axis line white
              ".MuiChartsAxis-tick": { stroke: "#fff" }, // tick marks white
              ".MuiChartsAxis-label": { fill: "#fff" }, // axis label white
            },
          },
        ]}
        yAxis={[
          {
            label: "Students",
            sx: {
              ".MuiChartsAxis-tickLabel": { fill: "#fff" },
              ".MuiChartsAxis-line": { stroke: "#fff" },
              ".MuiChartsAxis-tick": { stroke: "#fff" },
              ".MuiChartsAxis-label": { fill: "#fff" },
            },
          },
        ]}
        series={[
          { dataKey: "TotalStudent", label: "Total Student", valueFormatter },
          { dataKey: "Present", label: "Present", valueFormatter },
          { dataKey: "Absent", label: "Absent", valueFormatter },
          { dataKey: "Leave", label: "Leave", valueFormatter },
        ]}
        // width={600}
        height={400}
        sx={{
          "& .MuiChartsLegend-root": {
            color: "#fff", // legend text color
          },
          "& .MuiChartsLegend-series": {
            fill: "#fff", // legend series labels white
          },
        }}
      />
    </div>
  );
};

export default AttendanceGraph;
