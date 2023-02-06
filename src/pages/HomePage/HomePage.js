import React from "react";
import './HomePage.css'
import { Typewriter } from 'react-simple-typewriter';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function HomePage() {
    return (
        <div className="home">
            <div className="profile">
                <img src="./images/portfolio.png" alt="hey" width={300} height={200}></img>
            </div>
            <div className="homeContent">
                <h1>Hi! I Am <span>
                    <Typewriter
                        // cursor
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={70}
                        delaySpeed={1000}
                        words={['Software Engineer', 'Frontend Engineer', 'Mobile Engineer']}
                    />
                </span> <br />
                    Evans Mogeni
                </h1>
                <p>I got diverse skills ranging from Frontend Development to Software Development
                    Hello!I work as interface and Full stack  developer. I have passion for Web Development, Mobile Development and UI/UX Designing.
                </p>
                <div className="hire">
                    <button>Hire Me</button>
                    {/* <p>Projects <FaArrowRight/></p> */}
                </div>

                {/* <div className="conte">
       <div className="conted">
       <h2>40</h2>
       <p>Projects Done</p>
       </div>
      <div className="conted">
      <h2>Contacts</h2>
       <p>evansmogeni254@gmail.com</p>
      </div> */}
                {/* </div> */}
                {/* <div className="homeProj">
        <div className="proj">
            <h2>Project Statistics 2022</h2>
            <button>Know More</button>
        </div> */}
                {/* <div className="listproj">
            <ul>
                <li>
                    <h6>Web Development</h6>
                    <h6>85</h6>
                </li>
                <li>
                    <h6>Software Development</h6>
                    <h6>65</h6>
                </li>
                <li>
                    <h6>Mobile Development</h6>
                    <h6>45</h6>
                </li>
            </ul>
        </div> */}
                {/* </div> */}
                <div className="social">
                    <FaFacebook className="lik"/>
                    <FaInstagram className="lik"/>
                    <FaGithub className="lik"/>
                    <FaTwitter className="lik"/>
                    <FaLinkedin className="lik"/>
                </div>
            </div>
        </div>
    )
}
export default HomePage;