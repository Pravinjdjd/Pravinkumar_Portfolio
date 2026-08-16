import React from 'react';
import { Route, GraduationCap, Code2, Rocket, Briefcase, CheckCircle } from 'lucide-react';
import './DeveloperJourney.css';

export const DeveloperJourney = ({ journey }) => {
  const stepIcons = [GraduationCap, Code2, Rocket, Briefcase];

  return (
    <section id="journey" className="section-padding journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Route size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">
            Developer <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            From foundational Computer Science principles to building real-world full-stack systems and freelance solutions.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="journey-timeline">
          <div className="timeline-central-line" />

          {journey.map((item, idx) => {
            const Icon = stepIcons[idx] || CheckCircle;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}
              >
                {/* Timeline Icon Node */}
                <div className="timeline-node">
                  <Icon size={20} className="node-icon" />
                </div>

                {/* Timeline Content Card */}
                <div className="timeline-content glass-card">
                  <div className="timeline-card-header">
                    <span className="step-number-badge">Step {item.step}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-institution">{item.institution}</div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
