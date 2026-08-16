import React from 'react';
import { Cpu, Terminal, Check } from 'lucide-react';
import './DeveloperStack.css';

export const DeveloperStack = () => {
  const stackDomains = [
    {
      domain: "Frontend Architecture",
      skills: [
        { name: "React.js Component Design", level: "", desc: "Hooks, Props, Lifecycle, State Management" },
        { name: "JavaScript (ES6+)", level: "", desc: "Async/Await, Promises, DOM Manipulation, Fetch" },
        { name: "HTML5 & Modern CSS3", level: "", desc: "Flexbox, CSS Grid, Glassmorphic Styling, Responsive UI" }
      ]
    },
    {
      domain: "Backend & Enterprise Java",
      skills: [
        { name: "Java Enterprise (JEE)", level: "", desc: "OOP Principles, Exception Handling, Collections Framework" },
        { name: "JSP & Servlets", level: "", desc: "Web Dispatchers, Session Management, Filters & Request pipelines" },
        { name: "Spring Boot Framework", level: "", desc: "REST Controllers, Dependency Injection, Spring Data JPA" }
      ]
    },
    {
      domain: "Database & ORM Layer",
      skills: [
        { name: "MySQL Database", level: "", desc: "Relational Schemas, Constraints, Foreign Keys" },
        { name: "SQL Queries & Indexing", level: "", desc: "JOIN operations, DDL/DML, Optimization & Transactions" },
        { name: "Hibernate & JDBC", level: "", desc: "ORM Entity Mapping, JDBC Drivers, Connection Pools" }
      ]
    },
    {
      domain: "Tools & API Workflows",
      skills: [
        { name: "RESTful Web APIs", level: "", desc: "Endpoint Design, JSON Payloads, HTTP Status Codes" },
        { name: "Git & Version Control", level: "", desc: "Branching, Pull Requests, Commit History, GitHub" },
        { name: "IDEs & Postman", level: "", desc: "IntelliJ IDEA, VS Code, Endpoint Testing & Debugging" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding stack-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Mastery</span>
          </div>
          <h2 className="section-title">
            Developer <span className="gradient-text">Stack Matrix</span>
          </h2>
          <p className="section-subtitle">
            Authentic proficiency levels categorized by technical domain. No arbitrary numerical percentages—just proven, practical capability.
          </p>
        </div>

        {/* Domains Matrix Grid */}
        <div className="domains-grid">
          {stackDomains.map((domainItem, idx) => (
            <div key={idx} className="domain-card glass-card">
              <div className="domain-card-header">
                <Terminal size={18} className="domain-terminal-icon" />
                <h3>{domainItem.domain}</h3>
              </div>

              <div className="domain-skills-list">
                {domainItem.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="stack-skill-row">
                    <div className="skill-row-top">
                      <div className="skill-title-group">
                        <Check size={16} className="skill-check-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className={`skill-pill level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="skill-subdesc">{skill.desc}</p>
                    
                    {/* Visual Segmented Capability Meter */}
                    <div className="segmented-meter">
                      <div className={`segment seg-1 active-${skill.level.toLowerCase()}`} />
                      <div className={`segment seg-2 active-${skill.level.toLowerCase()}`} />
                      <div className={`segment seg-3 ${skill.level !== 'Familiar' ? `active-${skill.level.toLowerCase()}` : ''}`} />
                      <div className={`segment seg-4 ${skill.level === 'Comfortable' ? 'active-comfortable' : ''}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
