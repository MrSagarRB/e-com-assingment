import React from "react";

function TailsBudyForm() {
  return (
    <div className="w-full bg-black h-[390px] text-white flex  justify-center flex-col items-center mt-5">

      <div className="flex flex-row hover:cursor-pointer">
        <div>
          <div className="border-b-[1px] py-3">
            {" "}
            <h1 className="capitalize  font-bold">Tails Buddy</h1>
          </div>

          <div className="flex flex-row gap-10">
            <div className="w-80 border-b-[1px] py-3">
              <h1>About tailsbuddy</h1>
            </div>{" "}
            <div className="w-80 border-b-[1px] py-3">
              <h1>Privacy Policy</h1>
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <div className="w-80 border-b-[1px] py-3">
              <h1>Pet Adoption</h1>
            </div>{" "}
            <div className="w-80 border-b-[1px] py-3">
              <h1>About Our Ads</h1>
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <div className="w-80 border-b-[1px] py-3">
              <h1>Pet Care Topic</h1>
            </div>{" "}
            <div className="w-80 border-b-[1px] py-3">
              <h1> Shelter and Rescue Login</h1>
            </div>
          </div>
          <div className="py-5">
            {" "}
            <p>Sitemap</p>{" "}
          </div>
        </div>
        <div className=" w-96 text-white justify-center items-center  py-10 px-10 space-y-4 ">
          <p className="text-center text-md">
            Integer gravida dui et porta rhoncus. Null Laoreet vitae urna in
            luctus. Paesentet lacinia ante.
          </p>
          <div className="flex flex-col space-y-4">
            <button className=" btn1 bnw ">
              Sign up
            </button>
            <button className="btn1 bnw transition duration-1000">
              Download App
            </button>
          </div>
        </div>
      </div>


      <div className="bg-yellow-400 h-[45px] w-full"> 
       

      </div>

<div className="flex justify-between gap-20 text-gray-400 w-full px-36"> <p>@2020 Tailsbuddy.com </p>
      <p>Integer gravida dui et rhoncus. Nulla laoreet vitae urna in luctus. Praesent et lacina ante. </p>

 </div>
    </div>
  );
}

export default TailsBudyForm;
