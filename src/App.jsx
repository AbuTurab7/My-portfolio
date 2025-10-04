import './App.css'
import NavBar from "./components/NavBar";
import About from './components/About';
import Skills from './components/Skills';
// import Experience from './components/Experience';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import { Mode } from './ContextAPI';
import { lightTheme, darkTheme } from './theme';

function App() {

const [isDark, setIsDark] = useState(true);
const theme = isDark ? darkTheme : lightTheme;

 return (
    <Mode.Provider value={{ isDark, setIsDark }}>
      <div className="transition-colors duration-500" style={{ backgroundColor: theme.background, color: theme.textPrimary }}>
        

        {/* Grid background */}
        <div
          className="absolute inset-0 bg-[size:14px_24px]"
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.gridLine} 1px, transparent 1px), 
                              linear-gradient(to bottom, ${theme.gridLine} 1px, transparent 1px)`,
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
          }}
        ></div>

        <div className="relative pt-20">
          <NavBar />
          <About />
          <Skills />
          {/* <Experience /> */}
          <Project />
          <Education />
          <Contact />
          <Footer />
        </div>

      </div>
    </Mode.Provider>
  );
}

export default App
