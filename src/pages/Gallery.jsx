import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Pic from "../StorePic.jsx";
import PicLayout from "../components/PicLayout.jsx";

const picVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.2, // Stagger per PicLayout
    },
  }),
};

function Gallery() {
  const images = [Pic.foto1, Pic.foto2, Pic.foto3, Pic.foto4];
  const imagesRow2 = [Pic.foto1, Pic.foto2, Pic.foto3, Pic.foto4, Pic.foto1];
  const imagesRow3 = [Pic.foto1, Pic.foto2, Pic.foto3];

  return (
    <div>
      <div className="sticky">
        <Navbar />
      </div>
      <div className="mt-72 px-3">
        <h1 className="text-8xl tracking-tighter font-extrabold">
          SELECTED PICTURES
        </h1>

        <div className="grid grid-cols-4 gap-3 mb-3" style={{ clipPath: "inset(0 0 0 0)" }}>
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={picVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
            >
              <PicLayout src={src} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-3 mb-3" style={{ clipPath: "inset(0 0 0 0)" }}>
          {imagesRow2.map((src, i) => (
            <motion.div
              key={i}
              variants={picVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
            >
              <PicLayout src={src} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-3" style={{ clipPath: "inset(0 0 0 0)" }}>
          {imagesRow3.map((src, i) => (
            <motion.div
              key={i}
              variants={picVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
            >
              <PicLayout src={src} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
