import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "../App.css";
import StaggerText from "react-stagger-text";

const urlAndi = "https://mataraja.vercel.app/";
const urlIG = "https://www.instagram.com/carloimm/";
const email = "mailto:matheuscarloimanuel@gmail.com"

// Variants for the parent wrapper
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

// Variants for each h1
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  intial: {opacity: 0},
  animate: {opacity: 1},
  transition: {duration: 1, delay: 1}
}

function Contact() {
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row justify-between mt-[10vh] lg:px-3">
          <motion.div
            className="flex flex-col text-8xl lg:text-9xl tracking-tighter font-extrabold uppercase items-center lg:items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {["Let's", "GET", "IN", "TOUCH"].map((word, idx) => (
              <motion.h1 key={idx} variants={textVariants} className="w-fit">
                {word}
              </motion.h1>
            ))}
          </motion.div>

          <div className="w-5/8 pr-3 lg:flex flex-col items-end hidden">
            <p className="text-4xl tracking-tighter font-bold uppercase text-right">
              <StaggerText
                staggerDuration={2}
                startDelay={200}
                staggerEasing="cubic-bezier(0.4, 0, 0.2, 1)"
              >
                let's connect! if you have any question or want to explore some
                opportunities with me. I'm here to help
              </StaggerText>
            </p>
            <motion.div {...fadeIn} className="flex gap-3 text-xl font-medium tracking-tighter w-fit mt-3">
              <a href={email} className="un">
                EMAIL
              </a>
              <a href={urlIG} target="_blank" className="un">
                INSTAGRAM
              </a>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="flex justify-center items-center w-full gap-10 text-xl font-medium tracking-tighter mt-20 lg:hidden">
            <a href={email} className="un">
              EMAIL
            </a>
            <a href={urlIG} target="_blank" className="un">
              INSTAGRAM
            </a>
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="absolute bottom-32 lg:bottom-0 right-0 text-xl font font-medium flex justify-center lg:justify-end px-3 tracking-tighter w-full lg:w-fit">
          <p>
            Dev By{" "}
            <a href={urlAndi} className="un text-accent">
              Andi Mataraja
            </a>{" "}
            &copy; 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
