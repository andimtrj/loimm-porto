import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

function Gallery() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-bold">Hello, World!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
