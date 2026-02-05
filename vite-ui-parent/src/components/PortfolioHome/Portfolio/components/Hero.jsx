import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="greeting">Hi, I'm</span>
                        <span className="name">Avinash Peelukhana</span>
                    </h1>
                    <h2 className="hero-subtitle">Senior Software Engineer</h2>
                    <p className="hero-description">
                        Fullstack frontend engineer specializing in React, Node.js, and GCP.
                        Building scalable web applications, headless CMS, and enterprise UI component libraries.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-card">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">4</div>
                            <div className="stat-label">Companies</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                    </div>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="#experience" className="btn btn-secondary">View Work</a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
