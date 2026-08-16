import React from 'react';
import { X, Github, ExternalLink, Server, Database, Layers, CheckCircle2, Terminal } from 'lucide-react';
import './ProjectsShowcase.css';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="project-badge-pill">{project.badge}</span>
            <h2 className="modal-project-title">{project.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Subtitle & Description */}
          <p className="modal-subtitle">{project.subtitle}</p>

          {/* Tech Stack Pills */}
          <div className="modal-tech-stack">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features List */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <CheckCircle2 size={18} className="icon-cyan" />
              Key System Features
            </h4>
            <ul className="modal-features-list">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx}>
                  <span className="bullet-dot" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Architecture */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Server size={18} className="icon-purple" />
              System Architecture Flow
            </h4>
            <div className="architecture-box">
              <Terminal size={16} className="terminal-icon" />
              <code>{project.architecture}</code>
            </div>
          </div>

          {/* Database Schema Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Database size={18} className="icon-emerald" />
              MySQL Relational Schema
            </h4>
            <div className="db-schema-box">
              <code>{project.databaseSchema}</code>
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="modal-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={18} />
            <span>View Source Code</span>
          </a>

          {project.liveDemo && project.liveDemo !== '#' ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={18} />
              <span>Live Application</span>
            </a>
          ) : (
            <button className="btn-primary" onClick={() => alert('Demo environment ready upon request.')}>
              <ExternalLink size={18} />
              <span>Request Demo Access</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
