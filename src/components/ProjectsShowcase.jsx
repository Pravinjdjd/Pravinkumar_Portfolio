import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ArrowRight,
  CheckCircle2,
  Eye
} from 'lucide-react';

import { ProjectModal } from './ProjectModal';
import './ProjectsShowcase.css';

export const ProjectsShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding projects-section">

      <div className="container">

        {/* ============================================
            SECTION HEADER
        ============================================ */}

        <div className="section-header">

          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Software</span>
          </div>

          <h2 className="section-title">
            Project <span className="gradient-text">Showcase</span>
          </h2>

          <p className="section-subtitle">
            Explore my recent full-stack applications built with modern
            technologies and scalable architecture.
          </p>

        </div>


        {/* ============================================
            PROJECT GRID
        ============================================ */}

        <div className="projects-showcase-list">

          {projects.map((project, index) => (

            <article
              key={project.id}
              className="project-showcase-card glass-card"
              style={{
                animationDelay: `${index * 0.12}s`
              }}
            >

              {/* ======================================
                  PROJECT IMAGE
              ====================================== */}

              <div className="project-visual-side">

                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-screenshot-img"
                  />

                </div>


                {/* Image Hover */}

                <div className="visual-hover-overlay">

                  <button
                    className="btn-primary overlay-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={17} />

                    <span>
                      Explore Architecture
                    </span>

                  </button>

                </div>

              </div>


              {/* ======================================
                  PROJECT INFORMATION
              ====================================== */}

              <div className="project-info-side">

                {/* Title */}

                <div className="project-header">

                  <span className="project-badge-pill">
                    {project.badge}
                  </span>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                </div>


                {/* 10–15 Word Summary */}

                <p className="project-description">

                  {project.shortDescription ||
                    project.description}

                </p>


                {/* Small Features */}

                {project.keyFeatures && (
                  <div className="project-features">

                    {project.keyFeatures
                      .slice(0, 2)
                      .map((feature, featureIndex) => (

                        <div
                          key={featureIndex}
                          className="feature-item"
                        >

                          <CheckCircle2
                            size={14}
                            className="feature-check"
                          />

                          <span>
                            {feature}
                          </span>

                        </div>

                      ))}

                  </div>
                )}


                {/* Technology Pills */}

                <div className="project-tech-pills">

                  {project.techStack
                    ?.slice(0, 5)
                    .map((tech, techIndex) => (

                      <span
                        key={techIndex}
                        className="tech-pill"
                      >
                        {tech}
                      </span>

                    ))}

                </div>


                {/* ======================================
                    TWO BUTTONS
                ====================================== */}

                <div className="project-actions">

                  {/* Explore Architecture */}

                  <button
                    onClick={() =>
                      setSelectedProject(project)
                    }
                    className="btn-primary project-explore-btn"
                  >

                    <span>
                      Explore Architecture
                    </span>

                    <ArrowRight size={15} />

                  </button>


                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary project-github-btn"
                    aria-label={`View ${project.title} on GitHub`}
                  >

                    <Github size={17} />

                    <span>
                      GitHub
                    </span>

                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* ============================================
          PROJECT MODAL
      ============================================ */}

      {selectedProject && (

        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />

      )}

    </section>
  );
};