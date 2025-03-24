import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NewHome from "../pages/NewHome";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import PageTransition from "./PageTransition";

const fadeOutAnimation = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div {...fadeOutAnimation} key={location.pathname}>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <PageTransition text="Biography.">
                <NewHome />
              </PageTransition>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageTransition text="Gallery.">
                <Gallery />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition text="Contact.">
                <Contact />
              </PageTransition>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
