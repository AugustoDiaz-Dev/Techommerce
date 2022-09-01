import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>&copy; 2022 Augusto Diaz</p>
            <p className="icons">
                <SiLinkedin />
                <SiGithub />
            </p>
        </div>
    )
}

export default Footer