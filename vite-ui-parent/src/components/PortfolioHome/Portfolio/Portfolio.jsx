import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './Portfolio.css';

const Portfolio = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const targetElement = document.querySelector(target.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        // Navbar background on scroll
        const nav = document.querySelector('.nav');
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                if (nav) {
                    nav.style.background = 'hsla(230, 25%, 8%, 0.95)';
                    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                }
            } else {
                if (nav) {
                    nav.style.background = 'hsla(230, 25%, 8%, 0.8)';
                    nav.style.boxShadow = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and timeline items
        const animatedElements = document.querySelectorAll('.glass-card, .timeline-item, .skill-category');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Parallax effect for gradient orbs
        const handleMouseMove = (e) => {
            const orbs = document.querySelectorAll('.gradient-orb');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Active navigation link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const handleScrollForNav = () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScrollForNav);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleAnchorClick);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScrollForNav);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="portfolio-container">
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Portfolio;
