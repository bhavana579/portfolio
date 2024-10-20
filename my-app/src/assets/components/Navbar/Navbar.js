import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className="nav-menu">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#contact-me">Contact</a></li>
               
            </ul>
        </div>
    );
};

export default Navbar;
