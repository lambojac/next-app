import React from "react";
import {BsFacebook,BsTwitter,BsInstagram, BsLinkedin} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block ">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
             <BsFacebook/>
            </div>
            <div className="header_top_icon_wrapper">
<BsTwitter/>
            </div>
            <div className="header_top_icon_wrapper">
<BsInstagram/>
            </div>
            <div className="header_top_icon_wrapper">
<BsLinkedin/>
            </div>
          </div>
        </div>
      </div>
      Header Top
    </div>
  );
};

export default HeaderTop;
