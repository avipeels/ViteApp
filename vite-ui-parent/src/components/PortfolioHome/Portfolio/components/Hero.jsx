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
                    <p className="eyebrow">Engineer · builder · systems thinker</p>
                    <h1 className="hero-title">
                        <span className="greeting">I make complex products</span>
                        <span className="name">feel simple.</span>
                    </h1>
                    <h2 className="hero-subtitle">I’m Avinash Peelukhana — a senior software engineer focused on the front end of ambitious systems.</h2>
                    <p className="hero-description">
                        Over a decade in the craft, I’ve helped teams turn complicated domains into fast, reliable and human interfaces — from airline commerce to enterprise content platforms.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-card">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-card"><div className="stat-number">React</div><div className="stat-label">Primary medium</div></div>
                        <div className="stat-card">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                    </div>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="#about" className="btn btn-secondary">How I work</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
