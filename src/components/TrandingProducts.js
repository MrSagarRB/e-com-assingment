import React from "react";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TrendingPdata from "../trendingProductData";

function TrandingProducts() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-5 ">
      <div className="flex  w-[1000px] items-center justify-between h-10 p-4">
        {" "}
        <h1 className="font-bold">Discover Trending Products </h1>{" "}
        <button className="bg-yellow-300 px-4 py-1 rounded-xl  text-white font-semibold hover:bg-black hover:text-white transition">
          View All
        </button>{" "}
      </div>

      <div className="flex  w-[1200px] items-center gap-3 ">
  {
    TrendingPdata.map((items)=>{
      return( <div className="h-[306px] w-[186px]  mt-10  border-2 shadow-md bg-black rounded-b-3xl ">
      <div className="flex justify-between text-yellow-400 text-sm ">
        {" "}
        <div className="flex flex-row z-10 items-center  ">
          {" "}
          <StarIcon /> <h1 className="text-black">{items.rating} </h1>
        </div>{" "}
        <FavoriteIcon className=" z-10 " />{" "}
      </div>
      <img
        className="z-0 -mt-7"
        src="https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg"
      />
      <div className="bg-white rounded-b-2xl">
        <p className="text-sm font-bold p-1">
      {items.pname}
        </p>

        <div className="flex justify-evenly items-center text-sm">
          {" "}
          <p className="font-bold text-lg">Rs {items.price-items.discount}/-</p>{" "}
          <p className="text-xs line-through">Rs {items.price}/- </p>{" "}
          <p className="text-xs text-yellow-400">{items.discount}% Off</p>{" "}
        </div>

        <div className="p-2 flex justify-evenly items-center flex-col ">
          {" "}
          <div className="flex gap-2">
            <button className="bg-yellow-400 px-3 text-[10px] text-white border-[1px]">
              {" "}
              5KG{" "}
            </button>
            <button className=" px-3  text-[10px] text-black border-[1px] border-black ">
              {" "}
              10KG{" "}
            </button>
            <button className=" px-3 text-[10px] text-black  border-[1px] border-black ">
              {" "}
              10KG{" "}
            </button>
          </div>
          <p className="text-[11px] mr-auto p-1 text-blue-700">
            3 More Option
          </p>
        </div>
      </div>
      <button className="text-white ml-14 text-sm"> Add to Cart</button>
    </div>









      )
    })
  }




       
      </div>
      
      <div className="w-[1000px] flex justify-center items-center h-[200px] bg-gray-400  mt-10">
        <h1 className="text-2xl text-white"> BANNER SPACE</h1>
      </div>



    </div>
  );
}

export default TrandingProducts;
