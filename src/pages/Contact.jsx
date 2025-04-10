import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between mt-[10vh] px-3">
        <div className="text-9xl tracking-tighter font-extrabold">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>IN</h1>
          <h1>TOUCH</h1>
        </div>
        <div className="w-1/2 pr-3 flex flex-col items-end">
          <p className="text-4xl tracking-tighter font-bold uppercase text-right">
            let's connect! if you have any question or want to explore some opportunities with me. I'm here to help
          </p>
          <div className="flex gap-3 text-xl font-medium tracking-tighter w-fit mt-3">
            <a href="">EMAIL</a>
            <a href="">INSTAGRAM</a>
          </div>
        </div>
      </div>
      <div className="text-xl font font-medium flex justify-end px-3">
        <p>Dev By Andi Mataraja &copy; 2025</p>
      </div>
    </div>
  );
}

export default Contact;
