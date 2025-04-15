import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Pic from "../StorePic.jsx";
import PicLayout from "../components/PicLayout.jsx";
import PicDetails from "../components/PicDetails.jsx";

const picVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
};

function Gallery() {
  const images = [
    { src: Pic.foto1, title: "Image 1 Title" },
    { src: Pic.foto2, title: "Image 2 Title" },
    { src: Pic.foto3, title: "Image 3 Title" },
    { src: Pic.foto4, title: "Image 4 Title" },
  ];
  const imagesRow2 = [
    { src: Pic.foto1, title: "Image 1 Title" },
    { src: Pic.foto2, title: "Image 2 Title" },
    { src: Pic.foto3, title: "Image 3 Title" },
    { src: Pic.foto4, title: "Image 4 Title" },
    { src: Pic.foto1, title: "Image 1 Title" },
  ];
  const imagesRow3 = [
    { src: Pic.foto1, title: "Image 1 Title" },
    { src: Pic.foto2, title: "Image 2 Title" },
    { src: Pic.foto3, title: "Image 3 Title" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    title: "",
  });

  const handleImageClick = (image, title) => {
    setModalContent({ image, title });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="">
      <div className="sticky">
        <Navbar />
      </div>
      <div className="mt-3 lg:mt-72 px-3">
        <h1 className="text-6xl mb-5 lg:mb-0 text-center lg:text-left lg:text-8xl tracking-tighter font-extrabold">
          SELECTED PICTURES
        </h1>

        <div
          className="grid lg:grid-cols-4 gap-3 mb-3"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          {images.map((item, i) => (
            <motion.div
              key={i}
              variants={picVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
            >
              <PicLayout
                src={item.src}
                title={item.title}
                onClick={() => handleImageClick(item.src, item.title)}
              />
            </motion.div>
          ))}
        </div>

        <div
          className="grid lg:grid-cols-5 gap-3 mb-3"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          {imagesRow2.map((item, i) => (
            <motion.div
              key={i}
              variants={picVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
            >
              <PicLayout
                src={item.src}
                title={item.title}
                onClick={() => handleImageClick(item.src, item.title)}
              />
            </motion.div>
          ))}
        </div>

        <div
          className="grid lg:grid-cols-3 gap-3 mb-3"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          {imagesRow3.map((item, i) => (
            <motion.div
              key={i}
              variants={picVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
            >
              <PicLayout
                src={item.src}
                title={item.title}
                onClick={() => handleImageClick(item.src, item.title)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <PicDetails
        isOpen={modalOpen}
        onClose={closeModal}
        image={modalContent.image}
        title={modalContent.title}
      />
    </div>
  );
}

export default Gallery;