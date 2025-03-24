import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import aboutFoto from "../assets/aboutFoto.jpg";
import { easeInOut } from "framer-motion/dom";

// Animation configurations
const h1Animation = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -150, opacity: 0 },
  transition: { duration: 1, delay: 0.5, ease: "easeOut" },
};

const h1Animation2 = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -150, opacity: 0 },
  transition: { duration: 1, delay: 0.7, ease: "easeOut" },
};

const whiteDivAnimation = {
  initial: { scale: 1 },
  animate: { scale: 0.9 },
  exit: { opacity: 0, scale: 2 },
  transition: { duration: 1.5, delay: 0.6, ease: [0.74, 0, 0.19, 1.02] },
};

const blackDivAnimation = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1, delay: 0.5, ease: [0.74, 0, 0.19, 1.02] },
};

const contentAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};


function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setAnimationComplete(true)}
      >
        {showAnimation && (
          <motion.div
            {...blackDivAnimation}
            className="bg-black top-0 left-0 flex justify-center items-center absolute w-full h-full"
          >
            <motion.div
              {...whiteDivAnimation}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white z-40"
            >
              <motion.div
                style={{ clipPath: "inset(0 0 0 0)" }}
                className="w-fit"
              >
                <motion.h1
                  {...h1Animation}
                  className="text-4xl font-bold tracking-tighter"
                >
                  WELCOME TO MY WORLD
                </motion.h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {animationComplete && (
        <motion.div
          {...contentAnimation}
          className="flex justify-between w-full h-full"
        >
          <div className="flex flex-col justify-between">
            <Navbar />
            <div className="pb-5 pl-3">
              <div style={{ clipPath: "inset(0 0 0 0)" }} className="w-fit">
                <motion.h1 {...h1Animation} className="text-6xl font-extrabold tracking-tighter">
                  HALLOW! I'M CARLO - A HUMAN
                </motion.h1>
              </div>
              <div style={{ clipPath: "inset(0 0 0 0)" }} className="w-fit">
                <motion.h1 {...h1Animation2} className="text-6xl font-extrabold tracking-tighter">
                  WHO MAKES PICTURES TALK :)
                </motion.h1>
              </div>
            </div>
          </div>

          <div className="overflow-hidden block flex-shrink-0 w-[40vw] h-screen">
            <img
              src={aboutFoto}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Home;
