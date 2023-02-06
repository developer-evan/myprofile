import { useRef } from "react";
import "./NavBar.css";
function App() {
  const services = useRef(null);
  const blog = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <div className="hero">
        <div className="nav">
          <h2 className="logo"> Recipe</h2>
          <ul>
            <li onClick={() => scrollToSection(home)} className="link">
              Home
            </li>
            <li onClick={() => scrollToSection(about)} className="link">
              About 
            </li>
            <li onClick={() => scrollToSection(services)} className="link">
              Services
            </li>            
            <li onClick={() => scrollToSection(projects)} className="link">
              Projects
            </li>
          </ul>
        </div>
        <div ref={home}>
          <HomePage />
        </div>
      </div>
      <div ref={about} className="about">
        <About/>
      </div>
      <div ref={services} className="services">
        <Services/>
      </div>
      <div ref={projects} className="projects">
        <Projects/>
      </div>
    
    </div>
  );
}

export default App;
