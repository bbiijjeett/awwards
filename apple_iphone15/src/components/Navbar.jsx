import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-2 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full py-4 screen-max-width">
        <img
          src={appleImg}
          alt="apple-logo"
          width={16}
          height={20}
          className="opacity-50 hover:opacity-100"
        />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={bagImg}
            alt="apple-logo"
            width={18}
            height={18}
            className="opacity-50 hover:opacity-100"
          />
          <img
            src={searchImg}
            alt="apple-logo"
            width={18}
            height={18}
            className="opacity-50 hover:opacity-100"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
