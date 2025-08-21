const StudentData = () => {
  return (
    <div className="gap-5 p-5 bg-[#364152] rounded flex justify-between items-center ">
      <div>
        <span className="text-gray-300 font-semibold text-xl">Welcome, </span>
        <span className="text-indigo-300 font-semibold">Abhishek Shrestha</span>
      </div>

      <div>
        <button className="bg-indigo-500 px-3 py-2 rounded text-gray-300 font-semibold cursor-pointer hover:bg-indigo-700 shadow-2xl transition-all duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default StudentData;
