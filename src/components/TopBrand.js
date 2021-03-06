import React from "react";
import TopBrandsData from "../TopBrandsData";

export default function TopBrand() {
  return (
    <div className="flex flex-col w-full justify-center items-center md:pt-20 lg:pt-0">
      <div className="w-full md:w-[1000px] pl-2">
        <h1 className="text-gray-900 font-bold">Top Brands </h1>
        <p className="text-gray-400 text-sm">
          Shop from your favoriate Pet Brand
        </p>
      </div>

      <div className="lg:h-[300px] w-full lg:w-[1000px]  ">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center py-5 px-5">
          {TopBrandsData.map((items) => {
            return (
              <div className="flex flex-col justify-center items-center border-2 p-5 transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
                <img className="max-h-10 " src={items.imgUrl} />{" "}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full md:w-9/12 flex justify-center items-center h-[140px] bg-gray-400 ">
        <h1 className="text-2xl text-white"> BANNER SPACE</h1>
      </div>
    </div>
  );
}
