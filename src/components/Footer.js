// import {useRef} from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    // const services = useRef(null);
    // const blog = useRef(null);
    // const home = useRef(null);
    // // const contact = useRef(null);
    // const about = useRef(null);
    // const projects = useRef(null);
  
    // const scrollToSection = (elementRef) => {
    //   window.scrollTo({
    //     top: elementRef.current.offsetTop,
    //     behavior: "smooth",
    //   });
    // };

    return (
        <div className='footer'>
            {/* <h1>DevMogeni</h1> */}
            <div><h4>Developer Evan</h4></div>
            <div>
                <h4>Email</h4>
                {/* <ul>
                <li onClick={() => scrollToSection(home)} >
              Home
            </li>
            <li onClick={() => scrollToSection(about)} >
              About
            </li>
            <li onClick={() => scrollToSection(services)} >
              Services
            </li>
            <li onClick={() => scrollToSection(blog)} >
              Works
            </li>
            
            <li onClick={() => scrollToSection(projects)}>
              Projects
            </li>
                </ul> */}
                <a href='email'>evansmogeni254@gmail.com</a>
                </div>
            <div className='contact'>
                <h4>Contact</h4>
                <ul>
                  <li><FaFacebook/></li>
                  <li><FaLinkedin/></li>
                  <li><FaGithub/></li>
                  <li><FaTwitter/></li>
                  <li><FaInstagram/></li>
                </ul>
                
                </div>
        </div>
    )
}
export default Footer;