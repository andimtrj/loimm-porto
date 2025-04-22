import React from "react";
import Navbar from "../components/Navbar";
import aboutFoto from "../assets/aboutFoto.jpg"; // Import the image

function Bio() {
  return (
    <div className="relative w-full min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl">
          <div className="w-full max-w-md lg:max-w-none overflow-hidden">
            <img
              src={aboutFoto}
              alt="Carlo - Photographer"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-4 text-center lg:text-left">
              About Carlo
            </h1>
            <p className="text-lg lg:text-xl mb-4 leading-relaxed text-justify">
              Meet Carlo, a passionate photographer with a keen eye for capturing the unique essence of moments, people, and places. His journey behind the lens is driven by a desire to tell stories and evoke emotions through visually compelling narratives.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-justify">
              Specializing in portrait, street, or landscape photography. Carlo's work is characterized by its authentic feel, dramatic lighting, unique compositions. He believes that every picture holds a fragment of a larger story, inviting viewers to pause, reflect, and see the world from a different perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
