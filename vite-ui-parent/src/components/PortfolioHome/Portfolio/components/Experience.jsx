import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Senior Software Engineer',
            company: "Lowe's India",
            logo: '🏢',
            duration: 'Dec 2021 - Present · 4 yrs 3 mos',
            location: 'Bengaluru, Karnataka, India',
            tag: 'Back-End Web Development and Google Cloud Platform (GCP)',
            description: null,
            projects: []
        },
        {
            id: 2,
            title: 'Senior Software Engineer',
            company: 'Publicis Sapient',
            logo: '💡',
            duration: 'Feb 2020 - Dec 2021 · 1 yr 11 mos',
            location: 'Bengaluru, Karnataka, India',
            tag: null,
            description: 'Currently working as full stack frontend engineer to develop in house content management system completely hosted in Google Cloud Platform.',
            projects: []
        },
        {
            id: 3,
            title: 'Senior Software Developer',
            company: 'PwC',
            logo: '🔷',
            duration: 'Jun 2018 - Jan 2020 · 1 yr 8 mos',
            location: 'Bengaluru, Karnataka, India',
            tag: null,
            description: null,
            projects: [
                {
                    name: 'Project #1: US based Airlines',
                    description: 'An ecommerce portal for US based Airlines Company.',
                    skills: 'React, Redux, intl, CSS Grid, SCSS, Redux Saga, Git, GitHub, JIRA, VS Code, JEST, storybook',
                    highlights: [
                        'Senior React developer',
                        'Developed reusable components as part of storybook, converting wireframes into re-sponsive layouts',
                        'Collaborating with backend devs closely to deliver best product and perform code re-view',
                        'Using better optimiza-tion for performance of the application',
                        'Architecting better di-rectory structure to place containers and components'
                    ]
                },
                {
                    name: 'Project #2: Credit System (US Client)',
                    description: 'A credit card information sys-tem of customers around the globe.',
                    skills: 'React, SCSS, Boot-strap, Git, Bit-bucket, JIRA, VS Code, Jenkins, Cucumber and Gherkins',
                    highlights: [
                        'Role is senior react de-veloper and part of UI architecture team',
                        'Developing react com-ponents with proper coding standards',
                        'Create node mock API s in the interim time of actual API develop-ment for faster deliv-ery',
                        'Write end-to-end pro-tractor test cases for react',
                        'Setting up project spe-cific react develop-ment guidelines and perform code review accordingly',
                        'Conduct sessions fre-quently to share knowledge with the team'
                    ]
                }
            ]
        },
        {
            id: 4,
            title: 'Application Development Senior Analyst',
            company: 'Accenture',
            logo: '⚡',
            duration: 'Aug 2013 - May 2018 · 4 yrs 10 mos',
            location: 'Bengaluru Area, India',
            tag: null,
            description: 'I started career as a fresher and progressed as Sr. Software Developer.',
            projects: [
                {
                    name: 'Project #1: UK government based portal (Senior UI developer)',
                    description: 'A web based portal developed for Health service body of England and Scotland governments. This was a distributed agile project.',
                    skills: 'AngularJS, Jasmine, HTML5, SCSS, Bootstrap, VSTS, Visual Studio',
                    highlights: [
                        'Played scrum master for several sprints',
                        'Work closely with backend teams to come up with permutations and combinations on potential scenarios',
                        'Perform internal and external code reviews',
                        'Held discussions along with technical architect to draw several successful conclusions and their implementation',
                        'Conduct presentations and demos to the client'
                    ]
                },
                {
                    name: 'Project #2: Pharma Apps (US Client)',
                    description: null,
                    skills: null,
                    highlights: [
                        'Supported the critical applications, developed in-house applications which significantly saved dollars and effort of individuals',
                        'Developed chemical label printing software for the client and sup-ported the same',
                        'Developed pdf generation tool for certificate of analysis'
                    ]
                },
                {
                    name: 'Project #3: Indian FMCG product site (Jr .net developer)',
                    description: null,
                    skills: 'C#, SQL Server, ASP.NET',
                    highlights: [
                        'Part of application development team, which developed the major module of the client\'s freight system',
                        'Write sql stored procedures to perform CRUD operations in the module'
                    ]
                }
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content glass-card">
                                <div className="company-header">
                                    <div className="company-logo">{exp.logo}</div>
                                    <div className="company-info">
                                        <h3>{exp.title}</h3>
                                        <h4>{exp.company}</h4>
                                        <p className="duration">{exp.duration}</p>
                                        <p className="location">{exp.location}</p>
                                    </div>
                                </div>
                                {exp.tag && <div className="job-tag">{exp.tag}</div>}
                                {exp.description && <p className="job-description">{exp.description}</p>}
                                {exp.projects.length > 0 && (
                                    <div className="job-highlights">
                                        <h5>Key Projects:</h5>
                                        {exp.projects.map((project, idx) => (
                                            <div key={idx} className="project-item">
                                                <strong>{project.name}</strong>
                                                {project.description && <p>{project.description}</p>}
                                                {project.skills && (
                                                    <div className="project-skills">
                                                        {project.skills.split(',').map((skill, sIdx) => (
                                                            <span key={sIdx} className="project-skill-tag">
                                                                {skill.trim()}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                {project.highlights && (
                                                    <ul className="project-highlights">
                                                        {project.highlights.map((highlight, hIdx) => (
                                                            <li key={hIdx}>{highlight}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
