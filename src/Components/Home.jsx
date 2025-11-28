import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { RxGithubLogo } from "react-icons/rx";

function HomeSection() {
  return (
    <>
      {/* HOME SECTION */}
      <section
        id="home"
        className="pt-40 pb-20 text-center bg-[#0F0B28] text-white"
      >
        {/* Small Heading */}
        <h2 className="text-purple-400 text-3xl font-semibold">
          Hello, I'm
        </h2>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mt-4 tracking-wide">
          Qudsiya ZamZam
        </h1>

        {/* Role */}
        <h3 className="text-xl md:text-2xl font-semibold mt-4 text-purple-200">
          Full Stack Web & App Developer
        </h3>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-300 leading-relaxed">
          Transforming creative ideas into high-performing, visually engaging,
          and user-focused web experiences.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="/myresume.docx"
            download
            className="bg-purple-600 text-white px-4 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-purple-700 transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border-2 border-purple-500 text-purple-300 px-4 py-3 rounded-xl text-lg font-medium hover:bg-purple-600 hover:text-white transition"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-16 mt-14">
          <a
            href="https://www.linkedin.com/in/qudsiyashaikh"
            target="_blank"
            className="hover:scale-125 transition"
          >
            <LiaLinkedinIn className="text-4xl text-[#0A66C2]" />
          </a>

          <a
            href="https://github.com/qudsiyashaikh"
            target="_blank"
            className="hover:scale-125 transition"
          >
            <RxGithubLogo className="text-4xl text-white" />
          </a>
        </div>
         {/* Divider */}
      <div className="text-center text-purple-400 text-xl tracking-[10px] mt-10">
        ••••••••••
      </div>
      </section>
    </>
  );
}

export default HomeSection;
