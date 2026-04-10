import React from "react";
import kisansat from "../assets/kisansath.png";
import myportfolioimg from "../assets/myportfolioimg.png";
import kilangi from "../assets/kilangi.png";
import Managementsystem from "../assets/hospital management system.png";

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
            <img src={kisansat} alt="kisansat project" className="w-full border-b border-white/10" />

            <div className="p-5 text-left">
              <h3 className="text-[22px] mb-2 text-[#c8a4ff]">KisanSAT – Smart Agriculture Service Platform</h3>
              <p className="text-[#ccc] text-[15px] mb-4">
                Developed a responsive agriculture web platform using Laravel and MySQL, focusing on UI components, secure backend routes, and optimized database queries to ensure smooth performance and user experience. 🌱              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {["Html", "CSS", "Python", "Django", "MySql"].map((tag, idx) => (
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
                  href="https://www.kisansat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🌐
                </a>

                <a
                  href="https://github.com/qudsiyashaikh/kisansat-platform-case-study"
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
                A modern and responsive portfolio website showcasing my skills, projects, and resume.
                It highlights my front-end development expertise and passion for creating user-friendly web experiences.
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
            <img src={kilangi} alt="Kilangi image" className="w-full border-b border-white/10" />
            <div className="p-5 text-left">
              <h3 className="text-[22px] mb-2 text-[#c8a4ff]">Kilangi Jewellery Homepage</h3>
              <p className="text-[#ccc] text-[15px] mb-4">
                Designed and developed a responsive jewellery homepage using HTML, CSS, and JavaScript, featuring a modern UI with product navigation, search functionality, and elegant visuals to enhance the user shopping experience. ✨
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
                  href="https://kilangi-homepage-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🌐
                </a>
                <a
                  href="https://github.com/qudsiyashaikh/kilangi-homepage"
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
            <img src={Managementsystem} alt="Hospital Management System" className="w-full border-b border-white/10" />
            <div className="p-5 text-left">
              <h3 className="text-[22px] mb-2 text-[#c8a4ff]">Hospital Management System</h3>
              <p className="text-[#ccc] text-[15px] mb-4">
                The Hospital Management Dashboard is a user-friendly admin panel designed to efficiently manage hospital operations. It provides a centralized interface to monitor key activities such as patient records, doctor details, appointments, billing, and more.
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {["Html", "CSS", "Python", "Django", "MySQL"].map((tag, idx) => (
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
                  href="https://management-django.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a97fff] text-[20px] hover:text-[#d5b6ff]"
                >
                  🌐
                </a>
                <a
                  href="https://github.com/qudsiyashaikh/Management-Django"
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
