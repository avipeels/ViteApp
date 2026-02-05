import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'Redux', 'Redux Saga', 'AngularJS', 'HTML5', 'CSS Grid', 'SCSS', 'Bootstrap', 'Storybook']
        },
        {
            title: 'Backend & Database',
            skills: ['Node.js', 'Fastify', 'Couchbase', 'SQL Server', 'ASP.NET', 'C#']
        },
        {
            title: 'Cloud & DevOps',
            skills: ['Google Cloud Platform', 'Kubernetes', 'Docker', 'Spinnaker', 'Jenkins', 'Artifactory']
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'GitHub', 'Bitbucket', 'JIRA', 'VS Code', 'JEST', 'Jasmine', 'Cucumber', 'Lerna']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category glass-card">
                            <h3>{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
