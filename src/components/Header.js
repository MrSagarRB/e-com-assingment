import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div>
      <div className="bg-black text-white px-20 w-full h-[54px] flex flex-row items-center justify-between">
        <div className=" flex items-center ">
          <LanguageIcon />
          <div className="flex flex-row justify-center items-center ml-2">
            {" "}
            <h1 className="flex flex-row justify-center items-center font-bold">
              Delhi <ArrowDropDownIcon fontSize="large" />{" "}
            </h1>{" "}
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="space-x-10 flex flex-row items-center justify-center">
            {" "}
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon className="text-red-600" />
          </div>

          <div className="ml-20">
            {" "}
            <p className="uppercase hover:cursor-pointer ">Login</p>{" "}
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 text-white w-full h-[68px] flex flex-row items-center justify-evenly px-12">
        <div className=" text-2xl font-medium">
          {" "}
          <h1 className="flex flex-row justify-center items-center tracking-wide">
            TAILSBUDDY <span className="-rotate-90 text-xs -ml-2 "> .COM </span>{" "}
          </h1>{" "}
        </div>
        <nav className="font-medium space-x-3 text-xs">
          <a href="#">
            HOME
            <ExpandMoreIcon />{" "}
          </a>
          <a href="#">
            BREEDS
            <ExpandMoreIcon />{" "}
          </a>
          <a href="#">
            LEARN
            <ExpandMoreIcon />{" "}
          </a>
          <a href="#">GROUPS</a>
          <a href="#">CONTACT</a>
        </nav>
        <button className="bg-white text-black text-xs font-bold py-[18px] px-6 hover:bg-yellow-400 hover:border-2 hover:text-white">
          {" "}
          Download <br /> App
        </button>
        <div className="bg-white p-1 text-yellow-400 rounded-lg hover:cursor-pointer ">
          {" "}
          <SearchIcon />{" "}
        </div>
      </div>
      <div className="px-24 py-1">
        <p className="text-xs text-gray-500">
          Home- <span className="text-black">Shop</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
