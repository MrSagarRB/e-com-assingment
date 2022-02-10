import React from "react";
import ReviewData from "../reviewData";

function ProductReview() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-5 ">
      <div className="flex  w-[1000px] items-center justify-between h-10 p-4">
        {" "}
        <div>
          <h1 className="font-bold">Products Reviews </h1>
          <p className="text-xs text-gray-600">
            {" "}
            Watch and Learn About diffrent products
          </p>
        </div>{" "}
        <button className="bg-yellow-300 px-4 py-1 rounded-xl  text-white font-semibold hover:bg-black hover:text-white transition">
          View All
        </button>{" "}
      </div>
      <div className="py-10 w-[1000px] px-1 flex flex-row whitespace-nowrap overflow-x-auto  no-scrollbar   gap-5 ">
        {ReviewData.map((items) => {
          return (
            <div className="h-[160px] w-[200px] text-center border-[1px] shadow-md">
              <img className="" src={items.videoUrl} />
              <div className="">
              <p className="font-bold text-md  my-custom-style "> How to dewrom your <br/> puppy in fist year</p>
              </div>
            </div>
          );
        })}
      </div> 
      <div className="w-[1000px] flex justify-center items-center h-[140px] bg-gray-400 mt-5 ">
        <h1 className="text-2xl text-white"> BANNER SPACE</h1>
      </div>
    </div>
  );
}

export default ProductReview;
