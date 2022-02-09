import React from "react";
import dogFoodData from "../dogFoodData";

function ShopByCategory() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[1000px] ">
        <h1 className="text-gray-900 font-bold">Shop By Category </h1>
        <p className="text-gray-400 text-sm">
          Find products for different categories
        </p>
      </div>

      <div className="flex  w-[1000px] space-x-3 h-[50px] py-2 text-sm">
        <button className="px-10 py-1 bg-yellow-200 text-black font-semibold hover:bg-black hover:text-white rounded-sm">
          Dogs
        </button>
        <button className="px-10 py-1 bg-yellow-200 text-black font-semibold hover:bg-black hover:text-white rounded-sm">
          Cats
        </button>
        <button className="px-10 py-1 bg-yellow-200 text-black font-semibold hover:bg-black hover:text-white rounded-sm">
          Fish
        </button>
        <button className="px-10 py-1 bg-yellow-200 text-black font-semibold hover:bg-black hover:text-white rounded-sm">
          Hamster
        </button>
        <button className="px-10 py-1 bg-yellow-200 text-black font-semibold hover:bg-black hover:text-white rounded-sm">
          Birds
        </button>{" "}
      </div>

      <div className="h-[400px] w-[1000px]  ">
        <div class="grid grid-cols-6 gap-4 justify-center items-center py-5 px-2">
          {dogFoodData.map((items) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-32 w-32 rounded-full "
                  src={items.imgUrl}
                />{" "}
                <h1 className="font-semibold"> Dog Food</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
