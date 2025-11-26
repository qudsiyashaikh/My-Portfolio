import React from 'react'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from './Components/Skills';
import Project from './Components/Project';
import { FaCertificate } from 'react-icons/fa6';
import Experience from './Components/Experience';
import Contacts from './Components/Contacts'
import Footer from './Components/Footer';
// import Toaster from 'react-hot-toast'

function Portfolio() {
  return (
    < >
        <div className=' bg-gradient-to-r from-purple-900 to-pink-400'>
          <Navbar />
          <Home />
          <About/>
          <Skills/>
          <Project />
          <Experience />
          <Contacts />
          <Footer />

        </div>

      {/* <Toaster /> */}
    </>
  );
}
export default Portfolio;