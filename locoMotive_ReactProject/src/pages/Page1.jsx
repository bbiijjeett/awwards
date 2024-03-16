// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Foot from "../components/Foot";

const Page1 = () => {
  return (
    <div
      data-scroll-section
      className="min-h-screen w-full bg-[#F5E41B] flex flex-col justify-between"
    >
      <Navbar />
      <Header />
      <Foot />
    </div>
  );
};

export default Page1;
