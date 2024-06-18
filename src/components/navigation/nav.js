import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Nav = () => {
  const navItems = ["Home", "Trips", "Services", "About", "Contact Us"];

  return (
    <nav
      className=" text-[
      rgba(50, 27, 0, 1)] p-4 flex items-center justify-between flex-wrap"
      aria-label="Main Navigation"
    >
      <div>
        <Link href="/" className="font-bold">
          Luxury<span className="text-[rgba(251,133,0,1)]">Vacays</span>
        </Link>
      </div>
      <ul className="flex space-x-8 flex-wrap" role="menubar">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="border-b-4 py-2 border-white cursor-pointer transition-colors duration-300 hover:text-[rgba(251,133,0,1)] hover:border-[rgba(251,133,0,1)] focus:border-[rgba(251,133,0,1)]"
            role="none"
          >
            <Link
              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="focus:outline-none focus:text-[rgba(251,133,0,1)] focus:underline"
              role="menuitem"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <Button>Book now</Button>
    </nav>
  );
};

export default Nav;
