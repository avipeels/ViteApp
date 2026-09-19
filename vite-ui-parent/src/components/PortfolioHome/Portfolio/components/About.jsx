import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <p className="eyebrow">A little context</p><h2 className="section-title">The work behind the work.</h2>
                <div className="about-details" aria-label="Personal details">
                    <p>
                        Based in <span>Bengaluru, India</span>
                        <i aria-hidden="true" />
                        Studied at <span>Vellore Institute of Technology</span>
                        <i aria-hidden="true" />
                        <span>Senior Software Engineer @ Lowe&apos;s India</span>
                        <i aria-hidden="true" />
                        <span>Building for the web since 2013</span>
                    </p>
                </div>
                <div className="about-content">
                    <div className="about-card glass-card">
                        <div className="about-index">01</div><h3>Make the invisible visible</h3>
                        <p>I enjoy the messy middle: finding the real problem, shaping a clear interface, and giving the system underneath enough structure to last.</p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-index">02</div><h3>Think in systems</h3>
                        <p>Design systems, micro-frontends, delivery pipelines and cloud infrastructure are not separate concerns. Good product work connects all of them.</p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-index">03</div><h3>Leave a better trail</h3>
                        <p>I care about reusable components, useful documentation and calm collaboration — the things that help the next engineer move faster.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
