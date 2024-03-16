// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Foot = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-2"
      className="px-20 py-9  flex   justify-between"
    >
      <a className="text-lg" href="#">
        CONTACT
      </a>
      <button>
        <FaChevronDown />
      </button>
      <a className="text-lg" href="#">
        INSTAGRAM
      </a>
    </div>
  );
};

export default Foot;
