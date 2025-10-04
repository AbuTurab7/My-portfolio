import { useContext } from "react";
import { education } from "../constant";
import { Mode } from "../ContextAPI";

const Education = () => {
  const { isDark } = useContext(Mode);

  const renderEducationCardContent = (education) => (
    <>
      <div className="flex items-center space-x-8 mb-4">
        <div className="w-18 h-10 lg:w-24 lg:h-16 bg-white rounded-md overflow-hidden">
          <img
            src={education.img}
            alt={education.school}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className={`text-xl sm:text-xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
              {education.degree}
            </h3>
            <h4 className={`text-md sm:text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {education.school}
            </h4>
          </div>
          <p className={`text-sm mt-2 ${isDark ? "text-gray-500" : "text-gray-500"}`}>{education.date}</p>
        </div>
      </div>
      <p className={`${isDark ? "text-gray-400" : "text-gray-700"} mb-4`}>{education.desc}</p>
    </>
  );

  return (
    <section
      id="education"
      className={`py-24 px-6 sm:px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient clip-path-custom-3 ${
        isDark ? " bg-[#050414]" : "bg-white"
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-[#111]"}`}>Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`mt-4 text-lg font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        <div className={`absolute left-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 ${isDark ? "bg-white" : "bg-black"} h-full`} />

        <div className="relative sm:px-[7vw] px-[5vw]">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative pl-10 sm:pl-0 sm:grid sm:grid-cols-[1fr_auto_1fr] items-center mb-20"
            >
              {/* Desktop Left Card */}
              {index % 2 !== 0 && (
                <>
                  <div className={`hidden sm:block w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transition-transform transform hover:scale-105 ${
                    isDark ? "bg-gray-900 border border-white" : "bg-gray-100 border border-gray-300"
                  }`}>
                    {renderEducationCardContent(edu)}
                  </div>
                  <div className="hidden sm:flex z-10 justify-center items-center">
                    <div className="bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full overflow-hidden">
                      <img src={edu.img} alt={edu.company} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="hidden sm:block"></div>
                </>
              )}

              {/* Desktop Right Card */}
              {index % 2 === 0 && (
                <>
                  <div className="hidden sm:block"></div>
                  <div className="hidden sm:flex z-10 justify-center items-center">
                    <div className="bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full overflow-hidden">
                      <img src={edu.img} alt={edu.company} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className={`hidden sm:block w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transition-transform transform hover:scale-105 ${
                    isDark ? "bg-gray-900 border border-white" : "bg-gray-100 border border-gray-300"
                  }`}>
                    {renderEducationCardContent(edu)}
                  </div>
                </>
              )}

              {/* Mobile Layout */}
              <div className="sm:hidden w-full flex flex-col items-center relative mt-20">
                <div className="absolute -top-6 -left-16 z-10">
                  <div className="bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full overflow-hidden">
                    <img src={edu.img} alt={edu.company} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={`w-70 max-w-sm p-6 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md ${
                  isDark ? "bg-gray-900 border border-white" : "bg-gray-100 border border-gray-300"
                }`}>
                  {renderEducationCardContent(edu)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
