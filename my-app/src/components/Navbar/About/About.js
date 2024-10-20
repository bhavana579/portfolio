import React from "react";
import './About.css';
import coding_img from '../../../../image/coding_img.svg';
import music_img from '../../../../image/music_img.svg';
import badminton from '../../../../image/badminton.svg';

const About = () => {
    return (
        <div id='About' className='About'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-para">
                <p>
                    I am Bhavana Gorripotu, an Information Technology student with a passion for technology and continuous learning. I possess strong programming skills and excel in problem-solving through innovative solutions and meticulous planning. My ability to gather information effectively drives project success, ensuring that I deliver high-quality results. Outside of my studies, I enjoy playing badminton, listening to music, and exploring a wide range of movies, which enriches my perspective and enhances my focus.
                </p>
            </div>
            <div className="about-pics">
                <h2>Hobbies and Interests</h2>
                <div className="pics-container">
                    <img src={coding_img} alt="Coding" />
                    <img src={music_img} alt="Music" />
                    <img src={badminton} alt="Badminton" />
                </div>
            </div>
        </div>
    );
}

export default About;
