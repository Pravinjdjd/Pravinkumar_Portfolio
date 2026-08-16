import React, { useState } from "react";
import {
  FileText,
  Eye,
  Download,
  X,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";
import "./ResumeSection.css";

export const ResumeSection = ({
  personalInfo,
  education,
  onOpenModal,
  isModalOpen,
  onCloseModal,
}) => {
  return (
    <section id="resume" className="section-padding resume-section">
      <div className="container">
        <div className="resume-banner-card glass-card">
          <div className="banner-left">
            <div className="resume-icon-badge">
              <FileText size={32} />
            </div>
            <div>
              <span className="resume-badge-tag">Curriculum Vitae</span>
              <h2 className="resume-banner-title">
                Interested in my engineering background?
              </h2>
              <p className="resume-banner-subtitle">
                Download my complete formal resume or view an instant
                interactive preview of my technical capabilities and academic
                background.
              </p>
            </div>
          </div>

          <div className="banner-actions">
            <button onClick={onOpenModal} className="btn-primary">
              <Eye size={18} />
              <span>View Resume</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              onClick={(e) => {
                if (
                  !personalInfo.resumeUrl ||
                  personalInfo.resumeUrl.startsWith("#")
                ) {
                  e.preventDefault();
                  onOpenModal();
                }
              }}
              className="btn-secondary"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Resume Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={onCloseModal}>
          <div
            className="modal-content glass-card resume-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="project-badge-pill">Technical Resume</span>
                <h2 className="modal-project-title">{personalInfo.name}</h2>
                <p style={{ color: "var(--accent-cyan)", fontSize: "0.9rem" }}>
                  {personalInfo.role} • {personalInfo.secondaryRole}
                </p>
              </div>
              <button className="modal-close-btn" onClick={onCloseModal}>
                <X size={22} />
              </button>
            </div>

            <div className="modal-body resume-modal-body">
              <div className="resume-section-block">
                <h4>Executive Summary</h4>
                <p>{personalInfo.tagline}</p>
              </div>

              <div className="resume-section-block">
                <h4>Core Skillset</h4>
                <div className="resume-skills-grid">
                  <div>
                    <strong>Programming:</strong> Java, JavaScript (ES6+), SQL,
                    HTML5, CSS3
                  </div>
                  <div>
                    <strong>Frontend:</strong> React.js, Responsive Web Design,
                    Glassmorphism, Component Architecture
                  </div>
                  <div>
                    <strong>Backend & APIs:</strong> Spring Boot, RESTful APIs,
                    Servlets & JSP, HTTP Controllers
                  </div>
                  <div>
                    <strong>Database & Tools:</strong> MySQL, SQL Queries, Git,
                    GitHub, Postman, VS Code, IntelliJ IDEA
                  </div>
                </div>
              </div>

              <div className="resume-section-block">
                <h4>Education</h4>
                <div>
                  <strong>
                    {education.degree} in {education.field}
                  </strong>
                </div>
                <div style={{ color: "var(--text-secondary)" }}>
                  {education.college} ({education.university})
                </div>
              </div>

              <div className="resume-section-block">
                <h4>Featured Projects</h4>
                <ul>
                  <li>
                    <strong>Student Quiz Management System:</strong> React.js,
                    Spring Boot, MySQL automated testing suite.
                  </li>
                  <li>
                    <strong>Food Delivery Application:</strong> Java, Servlets,
                    JSP, MySQL multi-restaurant ordering engine.
                  </li>
                  <li>
                    <strong>EV Charging System:</strong> Java, Spring Boot, REST
                    APIs, MySQL charger slot tracker.
                  </li>
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={onCloseModal}>
                Close Preview
              </button>
              <a
                href="/Pravinkumar_CV_Final_ATS.pdf"
                download="Pravinkumar_Resume.pdf"
                className="resume-download-button"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
