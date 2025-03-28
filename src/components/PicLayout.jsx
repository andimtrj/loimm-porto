import React from "react";
import { motion } from "framer-motion";

const picVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function PicLayout({ src }) {
  return (
    <motion.div
      variants={picVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="overflow-hidden aspect-square"
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}

export default PicLayout;
