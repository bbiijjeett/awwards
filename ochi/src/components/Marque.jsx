/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="uppercase text-[25vw] leading-none font-sans font-bold pt-5 -mt-10"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="uppercase text-[25vw] leading-none font-sans  font-bold pt-5 -mt-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
