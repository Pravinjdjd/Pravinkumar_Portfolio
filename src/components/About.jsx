import React from 'react';
import { User, Code, Cpu, Target, Award, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import './About.css';
import profileImage from '../img/Screenshot_20260622_002931_ChatGPT.jpg';

export const About = ({ personalInfo, stats }) => {
  const mindsets = [
    {
      icon: Code,
      title: 'Clean & Scalable Code',
      description: 'Writing modular, self-documenting code following SOLID principles, clean MVC layers, and best practices.'
    },
    {
      icon: Cpu,
      title: 'Full-Stack System Thinking',
      description: 'Seamlessly bridging React frontend components with Java Spring Boot / JEE backends and MySQL schema design.'
    },
    {
      icon: Target,
      title: '100% Freelance & Full-Time',
      description: 'Transforming client requirements into production software with fast response times and 100% availability.'
    },
    {
      icon: Award,
      title: 'Rapid Learning Mindset',
      description: 'Quickly mastering emerging frameworks, tools, and API standards to deliver modern tech solutions.'
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Developer Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate software engineer building end-to-end web applications with precision, performance, and modern usability.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio-card glass-card">
            <div className="about-profile-header">
              <div className="about-avatar-large">
                <div className="about-avatar-glow" />
                <img
                  src={profileImage}
                  alt={`${personalInfo.name} - Software Developer`}
                  className="about-avatar-img"
                />
                <span className="about-online-dot" aria-label="Available" />
              </div>

              <div className="about-profile-info">
                <h3 className="about-name-title">{personalInfo.name}</h3>
                <span className="about-role-tag">{personalInfo.role}</span>
              </div>
            </div>

            <div className="bio-paragraphs">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx} className="bio-p">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bio-highlights-list">
              <div className="bio-highlight-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>100% Available for Freelance Projects & Full-Time Roles</span>
              </div>
              <div className="bio-highlight-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Specialized in Java, JEE (Servlets/JSP), Spring Boot, React.js & MySQL</span>
              </div>
              <div className="bio-highlight-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>B.E. Computer Science & Engineering Graduate</span>
              </div>
            </div>
          </div>

          <div className="about-mindset-column">
            <div className="mindset-cards-grid">
              {mindsets.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="mindset-card glass-card">
                    <div className="mindset-icon-box">
                      <Icon size={20} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="stats-row">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-value gradient-text">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  textDisplay={stat.textDisplay}
                />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};