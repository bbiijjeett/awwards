/* eslint-disable no-unused-vars */
import React from "react";

const Cards = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".5"
      className="w-full h-screen px-20 bg-zinc-900 flex items-center gap-5"
    >
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute text-xs text-[#f5c842] uppercase py-1 px-5 rounded-full border-2 border-[#f5c842] left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-1/2 h-full bg-[#143a34] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute text-xs uppercase py-1 px-5 rounded-full border-2 left-10 bottom-10">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#0c2824] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute text-xs uppercase py-1 px-5 rounded-full border-2 left-10 bottom-10">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
