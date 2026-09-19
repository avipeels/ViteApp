import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <p className="eyebrow">Open to good problems</p><h2 className="section-title">Have something worth making?</h2>
                <div className="contact-content">
                    <div className="contact-info glass-card">
                        <h3>Let’s start with the idea.</h3>
                        <p>I’m interested in thoughtful products, strong teams and conversations that turn “what if?” into something people can use.</p>
                        <div className="contact-links">
                            <a href="https://www.linkedin.com/in/avinash-peelukhana" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
