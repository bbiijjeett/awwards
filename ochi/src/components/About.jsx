/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.1"
      className="w-full p-20 z-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className=" text-[4vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-zinc-500">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <button className="uppercase flex gap-5 items-center px-8 py-4 mt-10 rounded-full bg-zinc-900 text-white">
            Read more
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-2xl bg-[#b5d442]"></div>
      </div>
    </div>
  );
};

export default About;
