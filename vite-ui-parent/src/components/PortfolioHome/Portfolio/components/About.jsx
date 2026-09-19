import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-details" aria-label="Personal details">
                    <p>
                        Based in <span>Bangalore Urban, Karnataka, India</span>
                        <i aria-hidden="true" />
                        Studied at <span>Vellore Institute of Technology</span>
                        <i aria-hidden="true" />
                        <span>Senior Software Engineer @ Lowe&apos;s India</span>
                        <i aria-hidden="true" />
                        <span>217 connections</span>
                    </p>
                </div>
                <div className="about-content">
                    <div className="about-card glass-card">
                        <div className="about-icon">💼</div>
                        <h3>Professional Journey</h3>
                        <p>Part of frontend engineering team that developed in-house headless content management system replacing AEM/Sitecore.</p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-icon">🚀</div>
                        <h3>Technical Excellence</h3>
                        <p>Part of the consumer team that utilised the CMS to build the homepage web app and others, hosting in GCP. Build react based micro frontend applications and deploying using Google Kubernetes Engine and Docker with automated app deployments in Spinnaker.</p>
                    </div>
                    <div className="about-card glass-card">
                        <div className="about-icon">🎨</div>
                        <h3>Innovation Leader</h3>
                        <p>I initiated and developed enterprise wide UI component library system with storybook, react, lerna. Scripting Jenkins file to automatically publish the latest updates to Artifactory maintained in Google Cloud Platform.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
