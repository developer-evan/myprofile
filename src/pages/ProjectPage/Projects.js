import React from "react";
import './Projects.css';
import { FaArrowRight, FaLaptopCode } from "react-icons/fa"


function Projects() {
    return (
        <div className="projects">
            <h1><FaLaptopCode /> Projects</h1>
            <div className="main">
                <div className="project">
                    <h3>E-commerce App</h3>
                    <a href=""><FaArrowRight /></a>
                </div>
                <div className="project"><h3>Chat APP</h3>
                <a href=""><FaArrowRight /></a>
                </div>
                <div className="project"><h3>Profile App</h3>
                <a href=""><FaArrowRight /></a>
                    </div>
                <div className="project"><h3>Notebook</h3>
                <a href=""><FaArrowRight /></a>
                    </div>
                <div className="project"><h3>Task Manager</h3>
                <a href=""><FaArrowRight /></a>
                </div>
                {/* <div className="project">E-commerce</div> */}
            </div>

        </div>
    )
}
export default Projects;