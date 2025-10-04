import React, { useState, useContext , useEffect } from "react";
import { projects } from "../constant";
import { Mode } from "../ContextAPI";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDark } = useContext(Mode);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = "auto";   // Re-enable scroll
  }

  return () => {
    document.body.style.overflow = "auto"; // Cleanup in case modal unmounts
  };
}, [selectedProject]);

  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-700";
  const cardBg = isDark ? "bg-[#121212]" : "bg-white";
  const borderColor = isDark ? "border-white" : "border-gray-300";
  const tagBg = isDark ? "bg-[#251f38]" : "bg-purple-100";
  const tagText = isDark ? "text-purple-500" : "text-purple-700";
  const modalBg = isDark ? "bg-[#1a1a1a]" : "bg-white";
  const buttonBg = isDark ? "bg-gray-800" : "bg-gray-200";
  const buttonText = isDark ? "text-gray-400" : "text-gray-700";

  return (
    <section
      id="projects"
      className={`py-24 pb-40 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative ${
        isDark ? "bg-[#050414]" : "bg-white"
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold ${textColor}`}>PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className={`${subTextColor} mt-4 text-lg font-semibold`}>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className={`border ${borderColor} ${cardBg} backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300`}
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>
                {project.title}
              </h3>
              <p className={`mb-4 pt-4 line-clamp-3 ${subTextColor}`}>
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-block ${tagBg} text-xs font-semibold ${tagText} rounded-full px-2 py-1 mr-2 mb-2`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div
            className={`${modalBg} rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className={`${textColor} text-3xl font-bold hover:text-purple-500`}
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className={`lg:text-3xl font-bold mb-4 text-md ${textColor}`}>
                  {selectedProject.title}
                </h3>
                <p className={`mb-6 lg:text-base text-xs ${subTextColor}`}>
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`${tagBg} text-xs font-semibold ${tagText} rounded-full px-2 py-1`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-1/2 ${buttonBg} hover:bg-purple-800 ${buttonText} lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center`}
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
