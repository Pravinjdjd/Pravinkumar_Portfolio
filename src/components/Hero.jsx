import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Phone,
  MessageSquare,
  Sparkles,
  Terminal,
} from "lucide-react";

import "./Hero.css";
import profileImage from "../img/Screenshot_20260622_002931_ChatGPT.jpg";

export const Hero = ({ personalInfo, onOpenResume }) => {
  const titles = [
    "Full-Stack Web Developer",
    "Freelance Software Developer",
    "Java & React Engineer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    let titleTimeout;

    const interval = setInterval(() => {
      setFadeClass("fade-out");

      titleTimeout = setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFadeClass("fade-in");
      }, 400);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(titleTimeout);
    };
  }, []);

  const orbitingSkills = [
    { name: "React.js", color: "#00f2fe" },
    { name: "Java JEE", color: "#f43f5e" },
    { name: "Spring Boot", color: "#9333ea" },
    { name: "MySQL", color: "#10b981" },
    { name: "REST APIs", color: "#38bdf8" },
    { name: "JSP / Servlets", color: "#f59e0b" },
  ];

  const phoneNumber = personalInfo?.phone
    ? personalInfo.phone.replace(/[^\d+]/g, "")
    : "";

  const whatsappNumber = personalInfo?.whatsapp
    ? personalInfo.whatsapp.replace(/\D/g, "")
    : phoneNumber.replace(/\D/g, "");

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* LEFT COLUMN */}
        <div className="hero-content">
          <div className="hero-intro-label">
            <Sparkles size={16} className="sparkle-icon" />
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero-name">{personalInfo.name}</h1>

          <div className="title-rotator-container">
            <h2 className={`hero-headline gradient-text ${fadeClass}`}>
              {titles[currentTitleIndex]}
            </h2>
          </div>

          <div className="hero-secondary-tag">
            <Terminal size={16} />
            <span>Available for Full-Time Roles & Freelance Projects</span>
          </div>

          <p className="hero-description">{personalInfo.tagline}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <ArrowUpRight size={18} />
            </a>

            <button onClick={onOpenResume} className="btn-secondary">
              <Download size={18} />
              <span>Resume</span>
            </button>

            <a href="#contact" className="btn-secondary">
              <Mail size={18} />
              <span>Contact</span>
            </a>
          </div>

          <div className="hero-footer-bar">
            <div className="quick-contact-actions-bar">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-contact-btn btn-github"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-contact-btn btn-linkedin"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-contact-btn btn-email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>

              <a
                href={whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-contact-btn btn-whatsapp"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </a>

              <a
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="quick-contact-btn btn-phone"
                title="Call"
                aria-label="Call"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-portrait-showcase">
          <div className="orbit-showcase-container">
            <div className="portrait-glow-aura" />

            <div className="orbit-track-ring" aria-hidden="true">
              {orbitingSkills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className={`orbiting-skill-node node-pos-${idx}`}
                  style={{
                    "--skill-color": skill.color,
                    animationDelay: `${idx * -4}s`,
                  }}
                >
                  <span
                    className="skill-dot-pulse"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="orbit-skill-label">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* PROFILE IMAGE */}
            <div className="central-avatar-frame">
              <div className="profile-image-wrapper">
                <img
                  src={profileImage}
                  alt={`${personalInfo.name} - Software Developer`}
                  className="central-avatar-img"
                />
                <div className="profile-image-shine" />
              </div>

              <div className="profile-status">
                <span className="profile-status-dot" />
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};