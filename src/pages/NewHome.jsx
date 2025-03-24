import React from "react";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import aboutFoto from "../assets/aboutFoto.jpg";
import { motion } from "framer-motion";

const h1Animation = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay: 0.3, ease: "easeOut" },
};

const h1Animation2 = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay: 0.4, ease: "easeOut" },
};

function NewHome() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-between">
        <Navbar />
        <div className="pb-5 pl-3">
          <div style={{ clipPath: "inset(0 0 0 0)" }} className="w-fit">
            <motion.h1
              {...h1Animation}
              className="text-6xl font-extrabold tracking-tighter"
            >
              HALLOW! I'M CARLO - A HUMAN
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 0 0)" }} className="w-fit">
            <motion.h1
              {...h1Animation2}
              className="text-6xl font-extrabold tracking-tighter"
            >
              WHO MAKES PICTURES TALK :)
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="overflow-hidden block flex-shrink-0 w-[40vw] h-screen">
        <img src={aboutFoto} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default NewHome;
