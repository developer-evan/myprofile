import { useRef } from "react";
import {  FaBars, FaSms, FaUser } from "react-icons/fa";
import "./App.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/AboutPage/About";
import HomePage from "./pages/HomePage/HomePage";
import Projects from "./pages/ProjectPage/Projects";
import Services from "./pages/ServicePage/Services";
// import Contact from "./pages/ContactPage/Contact"
// import Fire from "./fire";

function App() {
  const services = useRef(null);
  const blog = useRef(null);
  const home = useRef(null);
  // const contact = useRef(null);
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
      <ScrollToTop />
      <div className="hero" style={{ backgroundImage: "url(/images/contactjpg)" }}>
        <div className="nav">
          <h2 className="logo"><FaUser /> Profile</h2>
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
            <li onClick={() => scrollToSection(blog)} className="link">
              Works
            </li>
            
            <li onClick={() => scrollToSection(projects)} className="link">
              Projects
            </li>
            <li className="link" id="menu"><FaBars className="menu"/></li>
            </ul>

          
          <button className="button"><FaSms /> Let's Chat</button>
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
        {/* <h3>Blog</h3> */}
        <Projects/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
