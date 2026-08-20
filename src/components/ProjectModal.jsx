import React from 'react';

import {
  X,
  Github,
  ExternalLink,
  Server,
  Database,
  CheckCircle2,
  Terminal,
  Code2,
  Layers
} from 'lucide-react';

import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaNodeJs
} from 'react-icons/fa';

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap
} from 'react-icons/si';

import './ProjectsShowcase.css';


// ============================================
// TECHNOLOGY ICON
// ============================================

const getTechIcon = (tech) => {

  const name = String(tech).toLowerCase().trim();


  // Java
  if (name === 'java') {
    return <FaJava />;
  }


  // Spring Boot
  if (
    name.includes('spring boot') ||
    name === 'springboot'
  ) {
    return <SiSpringboot />;
  }


  // React
  if (
    name === 'react' ||
    name === 'react.js' ||
    name === 'reactjs'
  ) {
    return <FaReact />;
  }


  // JavaScript
  if (
    name === 'javascript' ||
    name === 'js'
  ) {
    return <FaJsSquare />;
  }


  // HTML
  if (
    name === 'html' ||
    name === 'html5'
  ) {
    return <FaHtml5 />;
  }


  // CSS
  if (
    name === 'css' ||
    name === 'css3'
  ) {
    return <FaCss3Alt />;
  }


  // MySQL
  if (
    name === 'mysql' ||
    name === 'my sql'
  ) {
    return <SiMysql />;
  }


  // MongoDB
  if (
    name === 'mongodb' ||
    name === 'mongo db'
  ) {
    return <SiMongodb />;
  }


  // Node.js
  if (
    name === 'node' ||
    name === 'node.js' ||
    name === 'nodejs'
  ) {
    return <FaNodeJs />;
  }


  // Express
  if (
    name === 'express' ||
    name === 'express.js' ||
    name === 'expressjs'
  ) {
    return <SiExpress />;
  }


  // Git
  if (name === 'git') {
    return <FaGitAlt />;
  }


  // Docker
  if (name === 'docker') {
    return <FaDocker />;
  }


  // Tailwind
  if (
    name === 'tailwind' ||
    name === 'tailwind css'
  ) {
    return <SiTailwindcss />;
  }


  // Bootstrap
  if (name === 'bootstrap') {
    return <SiBootstrap />;
  }


  // Default
  return <Code2 />;
};


// ============================================
// PROJECT MODAL
// ============================================

export const ProjectModal = ({ project, onClose }) => {

  if (!project) {
    return null;
  }


  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal-content glass-card"
        onClick={(e) => e.stopPropagation()}
      >


        {/* =====================================
            HEADER
        ===================================== */}

        <div className="modal-header">

          <div className="modal-title-wrapper">

            <span className="project-badge-pill">
              {project.badge}
            </span>

            <h2 className="modal-project-title">
              {project.title}
            </h2>

          </div>


          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project"
          >

            <X size={22} />

          </button>

        </div>


        {/* =====================================
            BODY
        ===================================== */}

        <div className="modal-body">


          {/* PROJECT DESCRIPTION */}

          <div className="modal-introduction">

            <Code2
              size={20}
              className="icon-cyan"
            />

            <p className="modal-subtitle">

              {project.subtitle ||
                project.description ||
                'Full-stack software application.'}

            </p>

          </div>


          {/* =================================
              TECHNOLOGIES
          ================================= */}

          <div className="modal-section">

            <h4 className="modal-section-title">

              <Layers
                size={18}
                className="icon-cyan"
              />

              Technologies Used

            </h4>


            <div className="modal-tech-stack">

              {Array.isArray(project.techStack) &&
                project.techStack.map(
                  (tech, index) => (

                    <div
                      key={`${tech}-${index}`}
                      className="technology-card"
                    >

                      <span
                        className="technology-icon"
                      >

                        {getTechIcon(tech)}

                      </span>


                      <span
                        className="technology-name"
                      >

                        {tech}

                      </span>

                    </div>

                  )
                )}

            </div>

          </div>


          {/* =================================
              FEATURES
          ================================= */}

          <div className="modal-section">

            <h4 className="modal-section-title">

              <CheckCircle2
                size={18}
                className="icon-cyan"
              />

              Key System Features

            </h4>


            <ul className="modal-features-list">

              {Array.isArray(project.keyFeatures) &&
                project.keyFeatures.map(
                  (feature, index) => (

                    <li key={index}>

                      <span className="bullet-dot" />

                      <span>
                        {feature}
                      </span>

                    </li>

                  )
                )}

            </ul>

          </div>


          {/* =================================
              ARCHITECTURE
          ================================= */}

          <div className="modal-section">

            <h4 className="modal-section-title">

              <Server
                size={18}
                className="icon-purple"
              />

              System Architecture Flow

            </h4>


            <div className="architecture-box">

              <Terminal
                size={16}
                className="terminal-icon"
              />

              <code>

                {project.architecture ||
                  'Frontend → Backend → Database'}

              </code>

            </div>

          </div>


          {/* =================================
              DATABASE
          ================================= */}

          <div className="modal-section">

            <h4 className="modal-section-title">

              <Database
                size={18}
                className="icon-emerald"
              />

              MySQL Relational Schema

            </h4>


            <div className="db-schema-box">

              <code>

                {project.databaseSchema ||
                  'Relational database schema'}

              </code>

            </div>

          </div>


        </div>


        {/* =====================================
            FOOTER BUTTONS
        ===================================== */}

        <div className="modal-footer">


          {/* GITHUB BUTTON */}

          <a
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary modal-action-btn"
          >

            <Github size={18} />

            <span>
              View Source Code
            </span>

          </a>


          {/* LIVE DEMO BUTTON */}

          {project.liveDemo &&
          project.liveDemo !== '#' ? (

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary modal-action-btn"
            >

              <ExternalLink size={18} />

              <span>
                Live Application
              </span>

            </a>

          ) : (

            <button
              type="button"
              className="btn-primary modal-action-btn"
              onClick={() =>
                alert(
                  'Demo environment ready upon request.'
                )
              }
            >

              <ExternalLink size={18} />

              <span>
                Request Demo Access
              </span>

            </button>

          )}

        </div>


      </div>

    </div>

  );
};