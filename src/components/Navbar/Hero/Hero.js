import React from 'react';
import './Hero.css';
import profile_img from '../../../../image/profile_img.svg';

const Hero = () => {
    return (
        <div id='Home' className='hero'>
            <img className="profile-img" src={profile_img} alt="my image" /> 
            <div className="text-container">
                <h1>BHAVANA G</h1>
                <h2>Welcome to my portfolio</h2>
            </div>
        </div>
    );
}

export default Hero;
