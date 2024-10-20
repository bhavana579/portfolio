import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Bhavana G. All rights reserved.</p>
                <div className="social-links">
                <a href="mailto:bhavanag0503@gmail.com" target="_blank" rel="email">Email: bhavanag0503@gmail.com</a>
                    <br/>
                    <a href="https://www.linkedin.com/in/bhavana-g-n5305/" style={{ color: '#f5f5dc' }}>LinkedIn</a>
                </div>
                <p>Thank you for visiting my portfolio!</p>
            </div>
        </footer>
    );
};

export default Footer;
