import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Pic from "../StorePic.jsx";
import PicLayout from "../components/PicLayout.jsx";

function Gallery() {
  return (
    <div>
      <div className="sticky">
        <Navbar />
      </div>
      <div className="mt-72 px-3">
        <h1 className="text-8xl tracking-tighter font-extrabold">
          SELECTED PICTURES
        </h1>

        <div className="grid grid-cols-4 gap-3 mb-3">
          <PicLayout src={Pic.foto1} />
          <PicLayout src={Pic.foto2} />
          <PicLayout src={Pic.foto3} />
          <PicLayout src={Pic.foto4} />
        </div>

        <div className="grid grid-cols-5 gap-3 mb-3">
          <PicLayout src={Pic.foto1} />
          <PicLayout src={Pic.foto2} />
          <PicLayout src={Pic.foto3} />
          <PicLayout src={Pic.foto4} />
          <PicLayout src={Pic.foto1} />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-3">
          <PicLayout src={Pic.foto1} />
          <PicLayout src={Pic.foto2} />
          <PicLayout src={Pic.foto3} />
        </div>
        
      </div>
    </div>
  );
}

export default Gallery;
