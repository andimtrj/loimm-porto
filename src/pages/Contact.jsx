import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import { MouseTracker } from "../components/MouseTracker";
import { motion } from "framer-motion";


const animateMouseTracker = {
  intial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.5, duration: 1, ease: "easeOut" },
};

function Contact() {
  const [target, setTarget] = useState(null);
  return (
    <div>
      <Navbar />
      {target && (
        <MouseTracker offset={{ x: 10, y: 10 }}>
          <div {...animateMouseTracker}>This is a {target}</div>
        </MouseTracker>
      )}
      <div
        className="w-1/2 bg-red-500"
        onMouseEnter={() => setTarget("circle")}
        onMouseLeave={() => setTarget(null)}
      >
        <motion.h1 {...animateMouseTracker} className="text-5xl">Test MouseTracker</motion.h1>
      </div>
    </div>
  );
}

export default Contact;
