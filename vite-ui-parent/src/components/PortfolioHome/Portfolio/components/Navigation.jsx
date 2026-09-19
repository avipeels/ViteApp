import React, { useState } from 'react';

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="#home" className="logo" aria-label="Avinash Peelukhana — home">
                    <span className="logo-mark">AP</span>
                    <span className="logo-name">Avinash Peelukhana</span>
                </a>
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                    <li><a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
                    <li><a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
                    <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                </ul>
                <button
                    className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
