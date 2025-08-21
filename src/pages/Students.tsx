import SideNav from "../components/SideNav";
import StudentData from "../components/studentData/StudentData";

const Students = () => {
  return (
    <div className="flex  h-full">
      <div>
        <SideNav />
      </div>
      <div className="flex flex-col gap-5 m-5 p-5  bg-[#1E2938] w-full rounded">
        <StudentData />
      </div>
    </div>
  );
};

export default Students;
