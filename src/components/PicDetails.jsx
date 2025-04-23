import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const customEase = [0.74, 0, 0.19, 1.02];

function PicDetails({ isOpen, onClose, image, title }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 w-full h-screen flex flex-col justify-center items-center p-8"
          initial={{ opacity: 0.5, y: "100%" }}
          animate={{ opacity: 1, y: 0.5 }}
          exit={{ opacity: 0.5, y: "100%", transition: {delay: 1.5, duration: 1, ease: customEase } }}
          transition={{ duration: 1.1, ease: [0.74, 0, 0.19, 1.02] }}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-8 right-8 text-white text-4xl cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            &times;
          </motion.button>

          <div className="w-fit" style={{ clipPath: "inset(0 0 0 0)" }}>
            <motion.div
              className="max-w-4xl w-full"
              initial={{ y: "-50vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-50vh", opacity: 0, transition: {delay: 0.5, duration: 1, ease: customEase}}}
              transition={{
                delay: 1,
                duration: 1,
                ease: [0.74, 0, 0.19, 1.02],
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </motion.div>
          </div>

          {/* {title && (
            <div className="mt-5" style={{ clipPath: "inset(0 0 0 0)" }}>
              <motion.h1
                className="text-2xl tracking-widest font-bold text-white py-2 px-1.5 uppercase"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0, transition: {delay: 0.5, duration: 1, ease: customEase} }}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: [0.74, 0, 0.19, 1.02],
                }}
              >
                {title}
              </motion.h1>
            </div>
          )} */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PicDetails;
