import React from 'react';
import './PortfolioHome.css';

const PortfolioHome = () => {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Avinash Peelukhana</h1>
            <h2 className="hero-subtitle">Fullstack Frontend Engineer</h2>
            <p className="hero-description">
              Experienced developer building in-house headless CMS, reusable components, and content migration solutions.
            </p>
            <div className="hero-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">GCP</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Fastify</span>
              <span className="skill-tag">Couchbase</span>
              <span className="skill-tag">MobX/Redux</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Frontend engineer with extensive experience in developing headless content management systems, 
            building homepage web apps and micro frontend applications using React, hosted on GCP, and 
            deployed with Google Kubernetes Engine, Docker, and Spinnaker. Successfully built 15+ components 
            for migration and initiated enterprise-wide UI component library systems with Storybook, React, and Lerna.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <span className="company">Lowe's India</span>
                <span className="duration">Dec 2021 - Present</span>
              </div>
              <p className="experience-description">
                Back-End Web Development and Google Cloud Platform (GCP)
              </p>
            </div>
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <span className="company">Publicis Sapient</span>
                <span className="duration">Feb 2020 - Dec 2021</span>
              </div>
              <p className="experience-description">
                Full stack frontend engineer developing in-house content management system completely hosted in Google Cloud Platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="section-content">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>M.Tech, Information Technology (Networking)</h3>
              <span className="institution">Vellore Institute of Technology</span>
              <span className="period">2011 - 2013</span>
            </div>
            <div className="education-card">
              <h3>B.Tech, Information Technology</h3>
              <span className="institution">Raghu Institute of Technology</span>
              <span className="period">2007 - 2011</span>
              <span className="grade">Grade: 7.7 CGPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <div className="section-content">
          <h2 className="section-title">Certifications</h2>
          <div className="certification-card">
            <h3>Microsoft 70-480: MCSD Programming in HTML5 with JavaScript</h3>
            <span className="issuer">Microsoft</span>
            <span className="date">Issued Aug 2017</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="section-content">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-info">
            <p>📍 Bangalore Urban, Karnataka, India</p>
            <p>🔗 217+ LinkedIn Connections</p>
            <p>🏢 Currently at Lowe's India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHome;
