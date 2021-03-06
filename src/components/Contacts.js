import React from "react";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";

function Contacts() {
  return (
    <div className=" flex w-full justify-center items-center mt-5"> 
    <div className="flex flex-col lg:flex-row lg:justify-evenly w-full lg:w-[1000px] lg:h-[98px] bg-yellow-400 px-10 items-start pl-5 md:pl-0 md:items-center space-y-5 md:space-y-0 py-5 md:py-0">
      <div className="flex  items-center justify-center gap-3 text-white font-semibold text-sm ">
        <HeadsetMicIcon />
        <p>
          Our Experts are available <br /> 9am to 9pm <br /> 7 Days{" "}
        </p>
      </div>

      <div className="flex items-center lg:justify-center gap-3 text-black font-semibold text-sm">
        <CallIcon />
        <p className="font-bold">Call: 9555482787</p>
      </div>

      <div className="flex items-center justify-center gap-3 text-black font-semibold text-sm bg-yellow-200 h-12 w-32 ">
        <WhatsAppIcon />
        <p className="font-bold">Whats App</p>
      </div>

      <div className="flex items-center justify-center gap-3 text-black font-semibold text-sm">
        <MailIcon />
        <p className="font-bold">
          Email Us: <br />
          care@tailsbuddy.com
        </p>
      </div>
    </div>
    </div>
  );
}

export default Contacts;
