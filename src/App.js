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
            {/* <li onClick={() => scrollToSection(blog)} className="link">
              Blog
            </li>
            <li onClick={() => scrollToSection(contact)} className="link">
              Contact
            </li> */}
            {/* <li className="menu"><FaBars/></li> */}
          </ul>

          {/* <div className="button"> */}
          <button className="button"><FaSms /> Let's Chat</button>
          {/* <a href="#home"><FaFacebook /></a>
            <a href="#home"><FaInstagram /></a>
            <a href="#home"><FaTwitter /></a> */}
          {/* <FaInstagram/>
      <FaTwitter/> */}
          {/* </div> */}

        </div>
        <div ref={home}>
          <HomePage />
        </div>
      </div>
      <div ref={about} className="about">
        {/* <h3>Services</h3> */}
        <About/>
      </div>
      <div ref={services} className="services">
        {/* <h3>Contact</h3> */}
        <Services/>
      </div>
      <div ref={projects} className="projects">
        {/* <h3>Blog</h3> */}
        <Projects/>
        
      {/* <Fire/>/ */}
      </div>
      {/* <div ref={contact} className="contact">
      <Contact/>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
