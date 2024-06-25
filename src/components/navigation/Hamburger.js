import React from "react";

const Hamburger = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col items-center justify-center gap-1 focus:outline-none"
      aria-label="Toggle navigation menu"
    >
      <span
        className={`block w-6 h-1 bg-black transition-transform duration-300 ${
          menuOpen ? "transform rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-1 bg-black transition-opacity duration-300 ${
          menuOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block w-6 h-1 bg-black transition-transform duration-300 ${
          menuOpen ? "transform -rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
