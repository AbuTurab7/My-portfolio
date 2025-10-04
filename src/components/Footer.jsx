import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mode } from "../ContextAPI";

const Footer = () => {
  const { isDark } = useContext(Mode);

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ${
        isDark ? "bg-[#0e0c1b] text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2
          className={`text-xl font-semibold ${
            isDark ? "text-purple-400" : "text-purple-700"
          }`}
        >
          Abu Turab
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            // { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className={`${
                isDark
                  ? "hover:text-purple-400"
                  : "hover:text-purple-600 text-gray-700"
              } text-sm sm:text-base my-1 transition-colors cursor-pointer`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/AbuTurab7" },
            {
              icon: <FaXTwitter />,
              link:
                "https://x.com/abu_turab693310?t=urgJojl7hZe4T8GZVZ2g9w&s=08",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/abu-turab",
            },
            {
              icon: <FaInstagram />,
              link:
                "https://www.instagram.com/turababu___786?utm_source=qr&igsh=eDJuMzkzeXdhangx",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition-transform transform hover:scale-110 ${
                isDark ? "hover:text-purple-400" : "hover:text-purple-600"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className={`text-sm mt-6 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © 2025 Abu Turab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
