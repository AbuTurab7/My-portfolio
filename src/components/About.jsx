import Tilt from "react-parallax-tilt";
import profileImage from "../assets/profile1.png";
import { Typewriter } from 'react-simple-typewriter';
import { useContext } from "react";
import { Mode } from "../ContextAPI";

const About = () => {
  const { isDark } = useContext(Mode);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
            Abu Turab
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className={`${isDark ? "text-white" : "text-[#1a1a1a]"}`}>I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Coder",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className={`text-base sm:text-lg md:text-lg mb-10 mt-8 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-700"}`}>
            I'm a passionate frontend enthusiast dedicated to crafting
            outstanding web experiences, driven by my deep affection for React.
            Skilled in both front-end and back-end development, I specialize in
            the MERN stack and other modern technologies to create seamless user
            experiences and efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1HCEUR6UHAj3aDpCdT7aaorLm6TxFEmGf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className={`w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full border-4 ${isDark ? "border-purple-700" : "border-purple-300"}`}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Abu Turab"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
