import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";


function Slider() {
  return (
    <div>
      <div className="h-[403px] bg-red-400 flex flex-col justify-center">
        <div className=" h-14 flex justify-between items-center text-white px-1 ">
          {" "}
          <div className=" w-5 py-1 rounded-sm bg-gray-600 hover:cursor-pointer hover:bg-gray-700">
            <ArrowLeftIcon fontSize="large" className="-ml-2 " />{" "}
          </div>{" "}
          <div className="w-5 py-1 rounded-sm bg-gray-600 hover:cursor-pointer hover:bg-gray-700">
            {" "}
            <ArrowRightIcon fontSize="large" className="-ml-2" />{" "}
          </div>{" "}
        </div>
      </div>
      <div className=" h-5 -mt-10 text-center flex items-center justify-center">
        <div className="bg-slate-300 h-[12px] w-[186px] rounded-lg opacity-40"> </div>
      </div>
    </div>
  );
}

export default Slider;
