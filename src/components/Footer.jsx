import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import './Footer.css';

export const Footer = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-bar">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <Code2 size={20} className="icon-cyan" />
            <span className="logo-name">{personalInfo.name}</span>
            <span className="logo-dot">.dev</span>
          </div>
          <p className="footer-tagline">
            Full-Stack Web Developer & Freelancer specializing in Java, Spring Boot, React.js, and MySQL.
          </p>
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to Top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="footer-bottom-copy">
        <div className="container">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Crafted with precision & clean code.</p>
        </div>
      </div>
    </footer>
  );
};
