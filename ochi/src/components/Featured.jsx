/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";

import React, { useState } from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-10">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 5 }}
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer  relative rounded-xl w-1/2 h-[70vh]"
          >
            <h1 className="absolute  left-full flex overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[#cdea68] text-8xl leading-none font-extrabold tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover rounded-xl hover:scale-95 transition ease-in-out  duration-300"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt="card1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 5 }}
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer  relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute right-full flex overflow-hidden top-1/2 translate-x-1/2 -translate-y-1/2 z-10 text-[#cdea68] text-8xl leading-none font-extrabold tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  key={index}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover rounded-xl hover:scale-95 transition ease-in-out  duration-300"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
              alt="card2"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
