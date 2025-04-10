import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const loc = useLocation();

  const linkClass = (path) =>
    loc.pathname === path ? "text-black" : "opacity-20";

  return (
    <nav className="flex font-extrabold py-2 items-center w-full text-black pl-3">
      <Link to="/" className="mr-5 ibm border-2 border-black px-1 py-2">
        Imm
      </Link>
      <div className="text-5xl flex gap-2.5 tracking-tighter">
        <Link to="/bio" className={`${linkClass("/bio")} hover:text-black`}>BIO,</Link>
        <Link to="/gallery" className={`${linkClass("/gallery")} hover:text-black`}>GALLERY,</Link>
        <Link to="/contact" className={`${linkClass("/contact")} hover:text-black`}>CONTACT</Link>
      </div>
    </nav>
  );
}

export default Navbar;

