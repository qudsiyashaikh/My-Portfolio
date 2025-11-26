import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "home", label: "Home" },
    { id: 2, text: "about", label: "About" },
    { id: 3, text: "skills", label: "Skills" },
    { id: 4, text: "projects", label: "Projects" },
    { id: 5, text: "Experience", label: "Experience" },
    { id: 6, text: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR START */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-6 md:px-16 h-16 flex justify-between items-center shadow-lg">

        {/* LOGO */}
        <h1 className="text-2xl font-semibold text-purple-300 cursor-pointer">
          Qudsiya Shaikh
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10">
          {navItems.map(({ id, text, label }) => (
            <li key={id} className="cursor-pointer hover:text-purple-300 duration-200">

              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {label}
              </Link>

            </li>
          ))}
        </ul>

        {/* MOBILE ICON */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer"
        >
          {menu ? <CgCloseO size={28} /> : <TfiMenuAlt size={28} />}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menu && (
        <div className="md:hidden bg-black bg-opacity-90 text-white absolute top-16 left-0 w-full py-6 shadow-lg">

          <ul className="flex flex-col items-center gap-6 text-lg">
            {navItems.map(({ id, text, label }) => (
              <li key={id} className="hover:text-purple-300 duration-200">

                <Link
                  onClick={() => setMenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {label}
                </Link>

              </li>
            ))}
          </ul>

        </div>
      )}
    </>
  );
}

export default Navbar;
