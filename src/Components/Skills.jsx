import React from "react";

function Skills() {
  // Data for skill progress bars
  const frontend = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
  ];

  const backend = [
    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "Flask", level: 75 },
    { name: "PHP", level: 75 },
    { name: "Laravel", level: 75 },
    { name: "REST API", level: 85 },
  ];

  const tools = [
    { name: "MySQL", level: 90 },
    { name: "SQLite", level: 85 },
    { name: "Git", level: 95 },
    { name: "GitHub", level: 95 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 },
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Python",
    "Django",
    "Flask",
    "REST API",
    "OOP",
    "MVC Architecture",
    "MySQL",
    "SQLite",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "WordPress",
    "Laravel",
    "PHP",
  ];

  // Component UI
  return (
    <>
      <div
        name="skills"
        className="flex flex-col items-center justify-center bg-[#0F0B28] px-4 py-20"
      >
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-purple-300 mb-12">
          Skills & Expertise
        </h2>

        {/* Skill Cards */}
        <div className="flex flex-wrap justify-center gap-8">

          {/* Frontend Card */}
          <div className="bg-white/10 backdrop-blur-xl p-6 w-80 rounded-xl shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-purple-200 text-xl font-semibold mb-4">
              Frontend
            </h3>

            {frontend.map((item) => (
              <div key={item.name}>
                <div className="flex  text-white justify-between">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded mt-1 mb-3">
                  <div
                    className="h-full bg-purple-400 rounded"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Backend Card */}
          <div className="bg-white/10 backdrop-blur-xl p-6 w-80 rounded-xl shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-purple-200 text-xl font-semibold mb-4">
              Backend
            </h3>

            {backend.map((item) => (
              <div key={item.name}>
                <div className="flex text-white justify-between">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded mt-1 mb-3">
                  <div
                    className="h-full bg-purple-400 rounded"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Card */}
          <div className="bg-white/10 backdrop-blur-xl p-6 w-80 rounded-xl shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-purple-200 text-xl font-semibold mb-4">
              Tools & Databases
            </h3>

            {tools.map((item) => (
              <div key={item.name}>
                <div className="flex text-white justify-between">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded mt-1 mb-3">
                  <div
                    className="h-full bg-purple-400 rounded"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Chips */}
        <h2 className="text-center text-3xl text-purple-300 mt-20 mb-6">
          Technologies I Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 text-purple-200 border border-purple-300/50 rounded-xl text-sm hover:bg-purple-600 hover:text-white transition hover:scale-110"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Divider */}
      <div className="text-center text-purple-400 text-xl tracking-[10px] mt-10">
        ••••••••••
      </div>
      </div>

   
    </>
  );
}

export default Skills;
