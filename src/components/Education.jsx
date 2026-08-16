import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Building2, Calendar } from 'lucide-react';
import './Education.css';

export const Education = ({ education }) => {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal Computer Science & Engineering degree combined with rigorous hands-on technical training.
          </p>
        </div>

        {/* Main Education Showcase Card */}
        <div className="education-main-card glass-card">
          <div className="edu-card-top">
            <div className="edu-degree-group">
              <div className="edu-icon-badge">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="edu-degree-title">{education.degree}</h3>
                <h4 className="edu-field-title gradient-text">{education.field}</h4>
              </div>
            </div>

            <div className="edu-university-badge">
              <Building2 size={16} />
              <span>{education.university}</span>
            </div>
          </div>

          <div className="edu-institution-row">
            <div className="inst-item">
              <Building2 size={16} className="inst-icon" />
              <span>{education.college}</span>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="edu-highlights-container">
            <h4 className="highlights-title">
              <BookOpen size={16} className="book-icon" />
              Academic & Technical Highlights
            </h4>
            <div className="highlights-grid">
              {education.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-card">
                  <CheckCircle2 size={16} className="check-cyan" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
