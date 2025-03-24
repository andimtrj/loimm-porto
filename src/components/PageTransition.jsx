import {  AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const h1Animation = {
  initial: { y: 150, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -150, opacity: 0 },
  transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
};

const whiteDivAnimation = {
  initial: { scale: 1 },
  animate: { scale: 0.9 },
  exit: { opacity: 0, scale: 2 },
  transition: { duration: 1, delay: 0.2, ease: [0.74, 0, 0.19, 1.02] },
};

const blackDivAnimation = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8, delay: 0.1, ease: [0.74, 0, 0.19, 1.02] },
};

const contentAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.6 },
};

function PageTransition({ children, text }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setAnimationComplete(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
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
                  {text}
                </motion.h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {animationComplete && (
        <motion.div {...contentAnimation}>{children}</motion.div>
      )}
    </div>
  );
}

export default PageTransition;
