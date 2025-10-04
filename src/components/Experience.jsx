import { useContext } from "react";
import { experiences } from "../constant";
import { Mode } from "../ContextAPI";

const Experience = () => {
  const { isDark } = useContext(Mode);

  const renderExperienceCardContent = (experience) => (
    <>
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-14 h-14 rounded-md overflow-hidden ${isDark ? "bg-gray-300" : "bg-white"}`}>
          <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-black"}`}>{experience.role}</h3>
          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{experience.company}</p>
          <p className="text-sm text-gray-500">{experience.date}</p>
        </div>
      </div>
      <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>{experience.desc}</p>
      <h5 className={`${isDark ? "text-white" : "text-black"} font-medium`}>Skills:</h5>
      <ul className="flex flex-wrap mt-2">
        {experience.skills.map((skill, idx) => (
          <li
            key={idx}
            className="bg-[#8245ec] text-gray-100 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section
      id="experience"
      className={`py-24 pb-24 px-6 sm:px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans transition-colors duration-500 skills-gradient clip-path-custom-2 ${
        isDark ? "bg-[#050414]" : "bg-white"
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-black"}`}>EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDark ? "text-gray-400" : "text-gray-700"}`}>
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline and Cards */}
      <div className="relative">
        <div
          className={`absolute left-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full ${
            isDark ? "bg-white" : "bg-gray-300"
          }`}
        ></div>

        <div className="relative sm:px-[7vw] px-[5vw]">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative pl-10 sm:pl-0 sm:grid sm:grid-cols-[1fr_auto_1fr] items-center mb-20"
            >
              {/* Left Card */}
              {index % 2 !== 0 && (
                <>
                  <div
                    className={`hidden sm:block w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                      isDark ? "bg-gray-900 border-white" : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    {renderExperienceCardContent(experience)}
                  </div>
                  <div className="hidden sm:block z-10 justify-center items-center">
                    <div
                      className={`border-4 border-[#8245ec] w-14 h-14 rounded-full flex justify-center items-center overflow-hidden ${
                        isDark ? "bg-gray-200" : "bg-white"
                      }`}
                    >
                      <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="hidden sm:block"></div>
                </>
              )}

              {/* Right Card */}
              {index % 2 === 0 && (
                <>
                  <div className="hidden sm:block"></div>
                  <div className="hidden sm:block z-10 justify-center items-center">
                    <div
                      className={`border-4 border-[#8245ec] w-14 h-14 rounded-full flex justify-center items-center overflow-hidden ${
                        isDark ? "bg-gray-200" : "bg-white"
                      }`}
                    >
                      <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div
                    className={`hidden sm:block w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                      isDark ? "bg-gray-900 border-white" : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    {renderExperienceCardContent(experience)}
                  </div>
                </>
              )}

              {/* Mobile Card */}
              <div className="sm:hidden w-full flex flex-col items-center relative mt-20">
                <div className="absolute -top-6 -left-16 z-10">
                  <div
                    className={`border-4 border-[#8245ec] w-14 h-14 rounded-full flex justify-center items-center overflow-hidden ${
                      isDark ? "bg-gray-200" : "bg-white"
                    }`}
                  >
                    <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div
                  className={`w-70 max-w-sm p-6 rounded-2xl border shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                    isDark ? "bg-gray-900 border-white" : "bg-gray-100 border-gray-300"
                  }`}
                >
                  {renderExperienceCardContent(experience)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
