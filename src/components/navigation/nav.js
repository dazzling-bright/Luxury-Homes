import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import navItems from "./NavItems";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="text-[rgba(50, 27, 0, 1)] p-4 flex items-center justify-between flex-wrap"
      aria-label="Main Navigation"
    >
      <div>
        <Link to="/" className="font-bold">
          Luxury<span className="text-[rgba(251,133,0,1)]">Vacays</span>
        </Link>
      </div>
      <div className="md:hidden">
        <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <ul
        className={`flex-col w-full md:flex-grow md:justify-end items-center md:w-auto md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 flex-wrap transition-all duration-300 ease-in-out ${
          menuOpen ? "flex" : "hidden"
        }`}
        role="menubar"
      >
        {navItems.map((item, index) => (
          <NavLink key={index} item={item} />
        ))}
        <Button className="">Book now</Button>
      </ul>
    </nav>
  );
};

export default Nav;
