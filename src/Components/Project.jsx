import React from "react";
import bgi from "../assets/bgi.png";
import myportfolioimg from "../assets/myportfolioimg.png";
import password from "../assets/password generater.png";
import husani from "../assets/husani family resturant.png";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="projects-section py-20 text-white text-center bg-[#0F0B28]"
      >
        {/* Section Title */}
        <h2 className="text-[38px] mb-10 text-[#b983ff]">Featured Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] mx-auto">
          {/* Project 1 */}
          <div className="project-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden pb-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(120,44,255,0.5)]">
            <img src={bgi} alt="BMI Calculator" className="w-full border-b border-white/10" />

            <div className="p-5 text-left">
              <h3 className="text-[22px] mb-2 text-[#c8a4ff]">BMI Calculator</h3>
              <p className="text-[#ccc] text-[15px] mb-4">
                This is a simple BMI Calculator built using React.js. The user inputs weight & height and gets BMI.
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {["Html5", "Css3", "Javascript", "React.js"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#9063ff33] border border-[#a97fff] px-3 py-1 rounded-full text-[13px] text-[#d8c6ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4">
                <a
                  href="https://bmi-calculator-gamma-sepia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🌐
                </a>

                <a
                  href="https://github.com/qudsiyashaikh/BMI-Calculator-.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🐱‍💻
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden pb-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(120,44,255,0.5)]">
            <img src={myportfolioimg} alt="Portfolio Website" className="w-full border-b border-white/10" />
            <div className="p-5 text-left">
              <h3 className="text-[22px] mb-2 text-[#c8a4ff]">Portfolio Website</h3>
              <p className="text-[#ccc] text-[15px] mb-4">
                A modern portfolio website showcasing my skills, projects, and resume.
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {["HTML", "Tailwind", "Javascript", "React.js"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#9063ff33] border border-[#a97fff] px-3 py-1 rounded-full text-[13px] text-[#d8c6ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4">
                <a className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]" href="#">
                  🌐
                </a>
                <a className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]" href="#">
                  🐱‍💻
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden pb-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(120,44,255,0.5)]">
            <img src={password} alt="Password Generator" className="w-full border-b border-white/10" />
            <div className="p-5 text-left">
              <h3 className="text-[22px] mb-2 text-[#c8a4ff]">Password Generator</h3>
              <p className="text-[#ccc] text-[15px] mb-4">
                A strong password generator with options like uppercase, length, symbols & numbers.
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {["Html", "Tailwind CSS", "JavaScript", "React.js", "MySQL"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#9063ff33] border border-[#a97fff] px-3 py-1 rounded-full text-[13px] text-[#d8c6ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4">
                <a
                  href="https://password-generator-react-js-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🌐
                </a>
                <a
                  href="https://github.com/qudsiyashaikh/Password-Generator-React.js.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🐱‍💻
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden pb-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(120,44,255,0.5)]">
            <img src={husani} alt="Husaini Restaurant" className="w-full border-b border-white/10" />
            <div className="p-5 text-left">
              <h3 className="text-[22px] mb-2 text-[#c8a4ff]">Husaini Family Restaurant</h3>
              <p className="text-[#ccc] text-[15px] mb-4">
                A stylish restaurant website made using Next.js + TypeScript + Tailwind.
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "React Icons"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#9063ff33] border border-[#a97fff] px-3 py-1 rounded-full text-[13px] text-[#d8c6ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4">
                <a
                  href="https://restaurant-next-js-mauve.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🌐
                </a>
                <a
                  href="https://github.com/qudsiyashaikh/Restaurant-next.js.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🐱‍💻
                </a>
              </div>
            </div>
          </div>
        </div>
         {/* Divider */}
      <div className="text-center text-purple-400 text-xl tracking-[10px] mt-20">
        ••••••••••
      </div>
      </section>

     
    </>
  );
};

export default Projects;
