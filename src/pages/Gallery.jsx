import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";

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

        <div className="flex justify-between mb-5 mt-1 gap-5">
          <div className="w-1/2">
            <div className="overflow-y-hidden overflow-x-scroll aspect-square">
              <img src={foto1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <h1 className="text-3xl font-bold tracking-tighter">
                Judul Foto 1
              </h1>
              <div className="inter flex gap-2">
                <p className="border-1 px-2">DESCRIPTION 1</p>
                <p className="border-1 px-2">DESCRIPTION 2</p>
                <p className="border-1 px-2">DESCRIPTION 3</p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="overflow-y-hidden overflow-x-scroll aspect-square">
              <img src={foto2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <h1 className="text-3xl font-bold tracking-tighter">
                Judul Foto 2
              </h1>
              <div className="inter flex gap-2">
                <p className="border-1 px-2">DESCRIPTION 1</p>
                <p className="border-1 px-2">DESCRIPTION 2</p>
                <p className="border-1 px-2">DESCRIPTION 3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-5 mt-1 gap-5">
          <div className="w-1/2">
            <div className="overflow-y-hidden overflow-x-scroll aspect-square">
              <img src={foto3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <h1 className="text-3xl font-bold tracking-tighter">
                Judul Foto 3
              </h1>
              <div className="inter flex gap-2">
                <p className="border-1 px-2">DESCRIPTION 1</p>
                <p className="border-1 px-2">DESCRIPTION 2</p>
                <p className="border-1 px-2">DESCRIPTION 3</p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="overflow-y-hidden overflow-x-scroll aspect-square">
              <img src={foto4} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <h1 className="text-3xl font-bold tracking-tighter">
                Judul Foto 4
              </h1>
              <div className="inter flex gap-2">
                <p className="border-1 px-2">DESCRIPTION 1</p>
                <p className="border-1 px-2">DESCRIPTION 2</p>
                <p className="border-1 px-2">DESCRIPTION 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
