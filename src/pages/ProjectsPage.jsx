import React from 'react';
import { ArrowLeft, FolderGit2 } from 'lucide-react';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import './ProjectsPage.css';

export const ProjectsPage = ({ projects, personalInfo }) => {
  const handleBackToPortfolio = () => {
    window.location.href = import.meta.env.BASE_URL;
  };

  return (
    <div className="projects-page">

      {/* Projects Page Header */}
      <header className="projects-page-header">

        <button
          className="back-to-portfolio-btn"
          onClick={handleBackToPortfolio}
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </button>

        <div className="projects-page-heading">

          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>My Work</span>
          </div>

          <h1 className="projects-page-title">
            Project <span className="gradient-text">Showcase</span>
          </h1>

          <p className="projects-page-description">
            Explore my full-stack applications, software projects,
            architecture, technologies, and development experience.
          </p>

        </div>
      </header>

      {/* Existing Projects UI */}
      <main>
        <ProjectsShowcase
          projects={projects}
        />
      </main>

      {/* Footer */}
      <footer className="projects-page-footer">
        <p>
          © {new Date().getFullYear()} {personalInfo?.name || 'Pravin Kumar'}.
          All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default ProjectsPage;