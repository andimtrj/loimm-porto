import React from "react";
import { Link, useLocation } from "react-router-dom";
import HoverZoop from "./HoverZoop";


function Navbar() {
  const loc = useLocation();

  const linkClass = (path) =>
    loc.pathname === path ? "text-black" : "opacity-20";

  return (
    <nav className="flex font-extrabold py-2 items-center w-full text-black justify-center lg:justify-start lg:pl-3">
      <Link to="/" className="mr-5 ibm border-2 border-black px-1 py-2 hidden lg:block">
        Imm
      </Link>
      <div className="text-3xl lg:text-5xl flex gap-2.5 tracking-tighter items-center">
        <Link to="/bio" className={`${linkClass("/bio")} hover:text-black`}><HoverZoop>Bio,</HoverZoop></Link>
        <Link to="/gallery" className={`${linkClass("/gallery")} hover:text-black`}><HoverZoop>Gallery,</HoverZoop></Link>
        <Link to="/contact" className={`${linkClass("/contact")} hover:text-black`}> <HoverZoop>Contact</HoverZoop> </Link>
      </div>
    </nav>
  );
}

export default Navbar;

