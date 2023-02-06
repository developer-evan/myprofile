import React from 'react'
import "./About.css";
import { FaAddressCard, FaCss3, FaDatabase, FaHtml5, FaJs, FaPhp, FaReact, FaSlidersH, FaWordpress } from 'react-icons/fa'

function About() {


    return (
        <div className='about'>
            <div className='ab'>
                <h1><FaAddressCard/> About Me</h1>
                <p>Hello! My name is Evans Mogeni, and I'm a Frontend Engineer.
                    I have a diverse set of skills,ranging from Frontend Web $ Mobile Development,
                    to Software Development.
                    I’m a Frontend Engineer specializing in building  Web and Mobile Applications.
                </p>
            </div>
            {/* <div className='skills'>
                <h1> <FaSlidersH/>  Skills</h1>
                <ul>
                    <li><FaHtml5 /></li>
                    <li><FaCss3 /></li>
                    <li><FaJs /></li>
                    <li><FaWordpress/></li>
                    <li><FaReact /></li>
                    <li><FaPhp /></li>
                    <li><FaDatabase /></li>
                </ul>
            </div> */}
        </div>
    )
}
export default About