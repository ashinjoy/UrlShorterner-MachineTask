import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <div className="w-[100%] bg-[#081738] h-20 flex text-white justify-center  items-center fixed inset-0">
      <div className="w-[92%] flex justify-between items-center h-[92%]">
        <div className="w-[50%]">
          <img src="/logo.png" alt="" className="w-[30%] object-contain" />
        </div>

        <div className="h-[50%]  flex justify-between gap-[3rem] items-center">
          <div className="">
            <button className="bg-[#1E90FF] text-white p-2 rounded-sm font-medium">
              Create Account
            </button>
          </div>
          <div className="">
            <GiHamburgerMenu className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
