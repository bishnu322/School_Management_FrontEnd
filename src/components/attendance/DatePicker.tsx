import React, { useEffect, useState } from "react";

interface IProps {
  setCurrentDateValue: (value: string) => void;
}

const DatePicker: React.FC<IProps> = ({ setCurrentDateValue }) => {
  const today = new Date().toISOString().split("T")[0];
  const [currentDate, setCurrentDate] = useState(today);

  useEffect(() => {
    setCurrentDateValue(currentDate);
  }, [currentDate, setCurrentDateValue]);

  return (
    <main>
      <div className="bg-[#364153] w-[270px]  rounded text-gray-300 p-2 flex gap-2 text-md pl-5">
        <label htmlFor="datepicker" className="font-semibold ">
          Select Date:
        </label>
        <input
          type="date"
          name="datepicker"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
        />
      </div>
    </main>
  );
};

export default DatePicker;
