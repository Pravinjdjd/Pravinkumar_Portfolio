import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, ArrowRight, CheckCircle2, Layers, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import './ProjectsShowcase.css';

export const ProjectsShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Software</span>
          </div>
          <h2 className="section-title">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle">
            Explore my recent full-stack applications showcasing Java, JEE, Spring Boot, React, and MySQL database integration.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="projects-showcase-list">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`project-showcase-card glass-card ${isEven ? 'card-normal' : 'card-reverse'}`}
              >
                {/* Visual Preview Image Side */}
                <div className="project-visual-side">
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-screenshot-img"

                    />
                  </div>

                  <div className="visual-hover-overlay">
                    <button
                      className="btn-primary overlay-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={18} />
                      <span>Inspect Details & Architecture</span>
                    </button>
                  </div>
                </div>

                {/* Information Content Side */}
                <div className="project-info-side">
                  <div className="project-header">
                    <span className="project-badge-pill">{project.badge}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Key Highlights */}
                  <div className="project-features">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="feature-item">
                        <CheckCircle2 size={15} className="feature-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-pills">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="project-actions">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight size={16} />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
