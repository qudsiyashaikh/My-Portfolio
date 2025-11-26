import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center justify-center bg-[#0F0B28] px-4 py-20"
      >
        {/* Heading */}
        <h2 className="text-[#a78bfa] text-center text-[2.5rem] mb-10">
          About Me
        </h2>

        {/* Text Box */}
        <p className="max-w-[900px] text-[#d1d5db] leading-[1.7] text-[1rem] text-center">
          I’m a dedicated Front-End Developer with strong expertise in HTML,
          CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap, focused on
          building clean, responsive, and user-friendly web interfaces.
          With a solid foundation in Python, Django, Flask, PHP, Laravel,
          WordPress, and database management using MySQL and SQLite, I bring
          both frontend creativity and backend logic together to deliver
          seamless digital experiences.
          I enjoy crafting intuitive UI designs, optimizing performance, and
          developing scalable web applications using modern tools like Git,
          GitHub, and VS Code. My goal is to turn ideas into functional,
          elegant, and interactive web solutions that offer a delightful user
          experience.
        </p>

       {/* Divider */}
      <div className="text-center text-purple-400 text-xl tracking-[10px] mt-10">
        ••••••••••
      </div>
      </section>
    </>
  );
};

export default About;
