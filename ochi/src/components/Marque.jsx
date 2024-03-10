/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="uppercase tracking-tighter text-[25vw] leading-none font-sans font-bold pt-5 -mt-[5vw] pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="uppercase tracking-tighter text-[25vw] leading-none font-sans  font-bold pt-5 -mt-[5vw] pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
