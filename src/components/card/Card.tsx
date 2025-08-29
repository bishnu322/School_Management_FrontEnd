import { PiCurrencyInrFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
const Card = () => {
  return (
    <div className="bg-[#1E2938] rounded p-3 w-1/4 flex justify-between flex-wrap items-center hover:bg-[#0B2234] transition-all duration-400">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex  items-center text-3xl font-bold text-gray-100">
          <MdOutlineCurrencyRupee />
          <h3>400</h3>
        </div>
        <p className="text-sm text-gray-400 ">Total payable</p>
      </div>

      <PiCurrencyInrFill size={60} className="text-white" />
    </div>
  );
};

export default Card;
