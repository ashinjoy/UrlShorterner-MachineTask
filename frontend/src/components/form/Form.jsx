import React from "react";

function Form() {
  return (
    <>
      <form action="" className="w-full flex flex-col gap-2 1/2">
        <div className="w-full rounded-sm h-[3.4rem] relative bg-[#7c95bb]">
          <input
            type="text"
            name=""
            id=""
            className="w-full outline-none border-2 h-full bg-[#09234C] border-white text-white p-2"
          />
          <button className="absolute right-3 top-2 p-2 rounded-sm  z-50 bg-[#1E90FF] text-white">
            SHORTEN URL
          </button>
        </div>
        <div className="w-full flex gap-2 h-[2rem] justify-around ">
          <div className="w-1/3 bg-[#09234B] h-full border-2 justify-center items-center flex rounded-sm border-white">
            <p className="text-white">Shorter.me</p>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="w-1/3 bg-[#09234B] h-full border-2 px-4 rounded-sm border-white text-white placeholder:text-white"
            placeholder="Enter alias"
          />
        </div>
      </form>
    </>
  );
}

export default Form;
