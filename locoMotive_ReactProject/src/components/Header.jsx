/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/fonts.css";

const Header = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".04"
      className="h-full w-full tracking-tight flex flex-col justify-center items-center text-8xl tk-freight-big-pro leading-[5vw] "
    >
      <p>
        <em>We are a</em> CREATIVE <em>studio</em>
      </p>
      <p>
        DEDICATED <em>to</em> CULTURAL
      </p>
      <p>
        ADVANCEMENT <em>through</em>{" "}
      </p>
      <p>
        STRATEGY <em>and</em> DESIGN.
      </p>
    </div>
  );
};

export default Header;
