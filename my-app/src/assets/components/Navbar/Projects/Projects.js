import React from "react";
import './Projects.css';

const Projects = () => {
    return (
        <div id='Projects' className="Projects">
            <h1>Projects</h1>
            <div className="project">
                <h3>LifeOnTheEdge</h3>
                <p>A web platform dedicated to raising awareness about wildlife extinction and advocating for the preservation of endangered species and biodiversity.</p>
            </div>
            <div className="project">
                <h3>Omni Finance</h3>
                <p>A comprehensive financial literacy website designed to empower users in managing their finances.</p>
            </div>
            <div className="project">
                <h3>Portfolio</h3>
                <p>This portfolio showcases my journey as an Information Technology student, highlighting my passion for technology and programming skills.</p>
            </div>
        </div>
    );
}

export default Projects;

