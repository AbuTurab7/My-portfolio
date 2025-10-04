import React, { useContext } from "react";
import { SkillsInfo } from "../constant";
import Tilt from "react-parallax-tilt";
import { Mode } from "../ContextAPI";

const Skills = () => {
  const { isDark } = useContext(Mode);

  return (
    <section
      id="skills"
      className={`py-24 px-[7vw] lg:px-[20vw] font-sans transition-all duration-300 clip-path-custom skills-gradient ${
        isDark ? "text-white dark" : "text-black"
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p
          className={`mt-4 text-lg font-semibold ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A collection of my technical skills and expertise honed through various projects
        </p>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap gap-5 justify-between py-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className={`w-full sm:w-[48%] p-6 rounded-2xl border transition-all ${
              isDark
                ? "bg-gray-900 border-gray-700 text-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                : "bg-white border-gray-300 text-black shadow-md"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
              {category.title}
            </h3>

            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all ${
                      isDark
                        ? "border-gray-700 text-gray-300"
                        : "border-gray-300 text-black"
                    }`}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8"
                    />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
