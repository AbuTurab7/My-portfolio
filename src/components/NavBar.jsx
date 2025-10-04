import { Link as ScrollLink, scrollSpy } from "react-scroll";
import { useContext, useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";
import { IoMoonOutline } from "react-icons/io5";
import { Mode } from "../ContextAPI";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useContext(Mode);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition duration-300 px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? `${isDark ? "bg-[#050414]/50" : "bg-white/70"} backdrop-blur-md backdrop-saturate-150 shadow-md`
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className={isDark ? "text-white" : "text-black"}>Abu</span>
          <span className="text-[#8245ec]">/</span>
          <span className={isDark ? "text-white" : "text-black"}>Turab</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Nav Items - Desktop */}
        <ul className={`hidden md:flex items-center space-x-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          {menuItems.map((item) => (
            <li key={item.id} className="hover:text-[#8245ec]">
              <ScrollLink
                activeClass="text-[#8245ec]"
                to={item.id}
                spy={true}
                // smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer transition-all"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Social + Theme Toggle */}
        <div className={`hidden md:flex items-center space-x-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <a
            href="https://github.com/AbuTurab7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abu-turab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
          {isDark ? (
            <WiDaySunny
              onClick={() => setIsDark(false)}
              className="cursor-pointer text-2xl hover:text-[#8245ec]"
            />
          ) : (
            <IoMoonOutline
              onClick={() => setIsDark(true)}
              className="cursor-pointer text-2xl hover:text-[#8245ec]"
            />
          )}
        </div>

        {/* Toggle - Mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 ${
            isDark ? "bg-[#050414]/50" : "bg-white/80"
          } backdrop-blur-md backdrop-saturate-150 rounded-lg shadow-lg md:hidden px-6 z-50`}
        >
          <div className="py-6 px-4 w-full max-w-xs">
            <ul className={`${isDark ? "text-gray-300" : "text-gray-700"} flex flex-col items-center space-y-4`}>
              {menuItems.map((item) => (
                <li key={item.id} className="hover:text-[#8245ec]">
                  <ScrollLink
                    activeClass="text-[#8245ec]"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <div className={`flex ${isDark ? "text-gray-300" : "text-gray-700"} space-x-4 pt-6 justify-center`}>
              <a
                href="https://github.com/AbuTurab7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abu-turab"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>
              {isDark ? (
            <WiDaySunny
              onClick={() => setIsDark(false)}
              className="cursor-pointer text-2xl hover:text-[#8245ec]"
            />
          ) : (
            <IoMoonOutline
              onClick={() => setIsDark(true)}
              className="cursor-pointer text-2xl hover:text-[#8245ec]"
            />
          )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
