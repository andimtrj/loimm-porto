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
    <div className="flex justify-between overflow-hidden">
      <div className="flex flex-col lg:xl:justify-between w-full">
        <Navbar />

        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
          <div className="overflow-hidden block flex-shrink-0 w-full h-[80vh] lg:xl:hidden px-5 mb-2">
            <img
              src={aboutFoto}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pb-5 lg:xl:pl-5 sm:pl-0 text-2xl lg:text-5xl xl:text-6xl w-full lg:xl:block flex flex-col justify-center items-center">
            <div style={{ clipPath: "inset(0 0 0 0)" }} className="w-fit">
              <motion.h1
                {...h1Animation}
                className="font-extrabold tracking-tighter"
              >
                HELLO! I'M CARLO - A HUMAN
              </motion.h1>
            </div>
            <div style={{ clipPath: "inset(0 0 0 0)" }} className="w-fit">
              <motion.h1
                {...h1Animation2}
                className="font-extrabold tracking-tighter"
              >
                WHO MAKES PICTURES TALK :)
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden lg:xl:block flex-shrink-0 w-[40vw] h-screen hidden">
        <img src={aboutFoto} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default NewHome;
