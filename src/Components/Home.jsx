import React from 'react'
import Pic from "../Components/Images/IMG_20240909_192307.jpg"
import { MdWhatshot } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import Tilt from 'react-parallax-tilt'
function Home() {
  return (
    <>
      <div
        name="Home"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col  md:flex-row">
          <div className='md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1 '>
            <span className="text-xl">  Welcome In My Portfolio</span>
           
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className=' bg-gradient-to-r from-purple-600 to-pink-500 py-3  font-semibold rounded-xl hover:opacity-90 transition'> Hellow, I'm Qudsiya Shaikh</h1>
              


            </div>

            <p className="text-sm md:text-md text-bold text-justify"> Front-end Web Developer</p>

            <br />
            <p>Hi! I’m Qudsiya ZamZam, a passionate and dedicated front-end developer from Akola, Maharashtra. With a strong foundation in HTML, CSS, JavaScript, and React.js, I love transforming creative ideas into clean, responsive, and user-friendly web interfaces.

              I’m organized, efficient, and always eager to learn new technologies that enhance my craft. My goal is to create seamless digital experiences that not only look good but also perform exceptionally well.</p>
            <br />
            {/* social icons */}
            <div className="flex flex-col  items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="  flex font-bold flex-col text-center ">Reach Out</h1>
                <ul className="flex space-x-5">

                  <li>
                    <a href="https://web.whatsapp.com/" target="_blank">
                      <MdWhatshot className="text-4xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                      <LiaLinkedinIn className="text-4xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/qudsiya__shaikh/saved/" target="_blank">
                      <FaSquareInstagram className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/k/" target="_blank">
                      <FaTelegramPlane className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      < RxGithubLogo className="text-4xl cursor-pointer" />
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
          <div className='md:w-1/2  md:ml-48 md:mt-20 mt-8 order-1 '>
            <Tilt

              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img src={Pic} className="rounded-xl md:w-[350px] md:h-[400px] "
                alt="" />
            </Tilt>
          </div>

        </div>
      </div>
      <hr className=' bg-slate-400 ' />
    </>
  )
}

export default Home