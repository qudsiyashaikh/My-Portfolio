import React from "react";

const Experience = () => {
  return (
    <section
      id="Experience"
        className="flex flex-col items-center justify-center bg-[#0F0B28] px-4 py-20"
    >
      <h2 className="text-center text-4xl font-bold mb-16 text-[#b38bff]">
        Experience
      </h2>

      <div className="relative">

        {/* Center Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#673ab7] -translate-x-1/2 rounded-lg"></div>

        {/* Internship */}
        <div className="relative w-1/2 pl-10 pr-5 py-5">
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[#b38bff]"></div>

          <div className="bg-[#1b1530] text-white p-6 rounded-2xl shadow-[0_0_20px_rgba(134,84,255,0.3)]">
            <span className="text-sm opacity-70">
              2025 (16-June To 16-October) - 4 Months
            </span>

            <h3 className="text-[22px] mt-1">Web Developer (Internship)</h3>
            <p className="text-[#b38bff] mb-3">Yasham Software</p>

            <p>
              Worked as a Web Developer Intern with hands-on experience in PHP,
              Laravel, MySQL & WordPress. Built responsive UI, optimized frontend
              performance, and collaborated with the team to develop dynamic web
              applications.
            </p>

            <h4 className="mt-4 font-semibold">Key Responsibilities:</h4>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-300">
              <li>Developed responsive web pages using HTML, CSS, JavaScript.</li>
              <li>Worked on Laravel CRUD operations & API handling.</li>
              <li>Customized WordPress themes & plugins.</li>
              <li>Improved website loading speed and UI/UX.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {["PHP", "Laravel", "MySQL", "WordPress", "HTML", "CSS"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-[#291a45] border border-[#6a4bc8] px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* BSc */}
        <div className="relative w-1/2 pl-5 pr-10 py-5 ml-auto">
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[#ff58ae]"></div>

          <div className="bg-[#1b1530]  text-white p-6 rounded-2xl shadow-[0_0_20px_rgba(134,84,255,0.3)]">
            <span className="text-sm opacity-70">2020 - 2022</span>

            <h3 className="text-[22px] mt-1">Bachelor of Science (B.Sc)</h3>
            <p className="text-[#b38bff] mb-3">Amravati University</p>

            <p>Completed graduation with an excellent academic performance.</p>

            <h4 className="mt-3 font-semibold">Percentage:</h4>
            <p className="text-[20px] text-[#d8b9ff] mb-2">79.81%</p>

            <div className="flex gap-2">
              {["Science", "University", "Academic"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#291a45] border border-[#6a4bc8] px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* HSC */}
        <div className="relative w-1/2 pl-10 pr-5 py-5">
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[#4dabf7]"></div>

          <div className="bg-[#1b1530] text-white p-6 rounded-2xl shadow-[0_0_20px_rgba(134,84,255,0.3)]">
            <span className="text-sm opacity-70">2018 - 2020</span>

            <h3 className="text-[22px] mt-1">HSC (12th)</h3>
            <p className="text-[#b38bff] mb-3">Amravati Board</p>

            <h4 className="mt-3 font-semibold">Percentage:</h4>
            <p className="text-[20px] text-[#d8b9ff] mb-2">61.69%</p>

            <div className="flex gap-2">
              {["Higher Secondary", "Amravati"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#291a45] border border-[#6a4bc8] px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SSC */}
        <div className="relative w-1/2 pl-5 pr-10 py-5 ml-auto">
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[#ffd369]"></div>

          <div className="bg-[#1b1530] text-white p-6 rounded-2xl shadow-[0_0_20px_rgba(134,84,255,0.3)]">
            <span className="text-sm opacity-70">2016 - 2018</span>

            <h3 className="text-[22px] mt-1">SSC (10th)</h3>
            <p className="text-[#b38bff] mb-3">Amravati Board</p>

            <h4 className="mt-3 font-semibold">Percentage:</h4>
            <p className="text-[20px] text-[#d8b9ff] mb-2">75.60%</p>

            <div className="flex gap-2">
              {["Secondary", "Amravati"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#291a45] border border-[#6a4bc8] px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
      {/* Divider */}
      <div className="text-center text-purple-400 text-xl tracking-[10px] mt-20">
        ••••••••••
      </div>
    </section>
    
  );
};

export default Experience;
