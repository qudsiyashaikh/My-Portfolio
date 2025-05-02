import React from 'react'
import { MdWhatshot } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">

              <a href="https://web.whatsapp.com/" target="_blank">
                <MdWhatshot size={28} /></a>

              <a href="https://www.linkedin.com/feed/" target="_blank">
                <LiaLinkedinIn size={28} /></a>

              <a href="https://www.instagram.com/qudsiya__shaikh/saved/" target="_blank">
                < FaSquareInstagram size={28} /></a>

              <a href="https://web.telegram.org/k/" target="_blank">
                <FaTelegramPlane size={28} /></a>

              <a href="https://github.com/" target="_blank">
                <RxGithubLogo size={28} /></a>
            </div>
            <div className="mt-8 border-t border-black pt-8 flex flex-col items-center">

              <h2>Created by Me l All Right reserved</h2>
              <br />
              <p className="text-sm"> Maharashtra </p>
              <p className="text-sm">zinharkhan8@gmail.com</p>
            </div>
          </div>

        </div>

      </footer>
    </>
  )
}
export default Footer