import React from "react";
import TopBrandsData from "../TopBrandsData";

export default function TopBrand() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[1000px] ">
        <h1 className="text-gray-900 font-bold">Top Brands </h1>
        <p className="text-gray-400 text-sm">
          Shop from your favoriate Pet Brand
        </p>
      </div>

      <div className="h-[300px] w-[1000px]  ">
        <div class="grid grid-cols-6 gap-4 justify-center items-center py-5 px-2">
          {TopBrandsData.map((items) => {
            return (
              <div className="flex flex-col justify-center items-center border-2 p-5">
                <img className="h-22" src={items.imgUrl} />{" "}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[1000px] flex justify-center items-center h-[140px] bg-gray-400 ">
        <h1 className="text-2xl text-white"> BANNER SPACE</h1>
      </div>
    </div>
  );
}
