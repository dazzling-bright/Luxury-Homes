// import React from "react";
// import { Link } from "react-router-dom";

// const NavLink = ({ item }) => {
//   return (
//     <li
//       className="border-b-4 py-2 border-white cursor-pointer transition-colors duration-300 hover:text-[rgba(251,133,0,1)] hover:border-[rgba(251,133,0,1)] focus:border-[rgba(251,133,0,1)]"
//       role="none"
//     >
//       <Link
//         to={`/${item.toLowerCase().replace(/ /g, "-")}`}
//         className="focus:outline-none focus:text-[rgba(251,133,0,1)] focus:underline"
//         role="menuitem"
//       >
//         {item}
//       </Link>
//     </li>
//   );
// };

// export default NavLink;

// src/components/NavLink.js

import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ item }) => {
  return (
    <li
      className="border-b-4 max-w-fit py-2 border-white cursor-pointer transition-colors duration-300 hover:text-[rgba(251,133,0,1)] hover:border-[rgba(251,133,0,1)] focus:border-[rgba(251,133,0,1)]"
      role="none"
    >
      <Link
        to={`/${item.toLowerCase().replace(/ /g, "-")}`}
        className="focus:outline-none focus:text-[rgba(251,133,0,1)] focus:no-underline"
        role="menuitem"
      >
        {item}
      </Link>
    </li>
  );
};

export default NavLink;
