import React from "react";
import { motion } from "framer-motion";

const picVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.74, 0, 0.19, 1.02] },
  },
};

// Shared transition
const sharedTransition = {
  ease: [0.74, 0, 0.19, 1.02],
  duration: 0.8,
};

function PicLayout({ src, refDetail }) {
  return (
    <motion.div
      variants={picVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}
      className="overflow-hidden aspect-square"
    >
      <motion.div
        className="relative w-full h-full flex justify-center items-center"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.img
          src={src}
          alt=""
          className="w-full h-full object-cover"
          variants={{
            rest: { scale: 1, transition: sharedTransition },
            hover: { scale: 1.2, transition: sharedTransition },
          }}
        />

          <motion.a
            className="absolute text-3xl font-bold tracking-tight text-white bg-accent px-3 py-1"
            variants={{
              rest: { opacity: 0, y: 100, transition: sharedTransition },
              hover: { opacity: 1, y: 0, transition: sharedTransition },
            }}
            href={refDetail}
          >
            <p>More Details</p>
          </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default PicLayout;
