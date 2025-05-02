import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-scroll"
import MY from './Images/NameLogo.png'
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Skills",
    },
    {
      id: 3,
      text: "Project",
    },
    {
      id: 4,
      text: "Certificat",
    },
    {
      id: 5,
      text: "Contact",
    },

  ];
  return (
    <>
      <div className="  max-w-screen-2xl  container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between bg-transparent items-center h-16">
          <div className=" flex space-x-2">
            <img src={MY} className="h-12 w-20 rounded-e-3xl" alt="" />
            <h1 className="font-semibold text-xl Hi! I’m Qudsiya ZamZam, a passionate and dedicated front-end developer from Akola, Maharashtra. With a strong foundation in HTML, CSS, JavaScript, and React.js, I love transforming creative ideas into clean, responsive, and user-friendly web interfaces.

I’m organized, efficient, and always eager to learn new technologies that enhance my craft. My goal is to create seamless digital experiences that not only look good but also perform exceptionally well.cursor-pointer" >  Qudsiya Shaikh

              <span className="text-pink-500 text-2xl">l</span>
              <p className="text-sm"> Web Developer</p>
            </h1>
          </div>
          {/*  desktop */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {
                navItems.map(({ id, text }) => (
                  <li
                    className="hover:scale-150 duration-200 cursor-pointer"
                    key={id}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? < CgCloseO size={28} /> : <TfiMenuAlt size={28} />}
            </div>
          </div>
        </div>
        {/* mobile */}
        {
          menu && (

            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden ">
              <ul className="md:hidden flex flex-col  h-screen items-center justify-center space-y-3 text-xl">
                {
                  navItems.map(({ id, text }) => (
                    <li className="hover:scale-150 duration-200 font-semibold cursor-pointer"
                      key={id}
                    >
                      <Link
                        onClick={() => setMenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
      </div>
      <hr />
    </>
  )
}
export default Navbar