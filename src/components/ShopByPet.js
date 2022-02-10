import React from "react";
import ShopByPetData from "../sortByPetData";

function ShopByPet() {
  return (
    <div className="flex flex-col items-center py-10 ">
      <h1>Shop By Pet Type</h1>
      <div className=" flex  py-5  w-full items-center justify-center space-x-10 px-4 cursor-pointer">
        {ShopByPetData.map((items) => {
          return (
            <div className="flex flex-col  items-center rounded-md">
              <img className="w-[100px] h-[100px] rounded-md translate-y-6 transform hover:scale-90 transition duration-500 ease-in-out " src={items.imgUrl}  />
              <h1 className="mt-10">{items.name} </h1>
            </div>
          );
        })}
      </div>

      <div className="w-[1000px] flex justify-center items-center h-[140px] bg-gray-400 ">
        <h1 className="text-2xl text-white"> BANNER SPACE</h1>
      </div>
    </div>
  );
}

export default ShopByPet;
