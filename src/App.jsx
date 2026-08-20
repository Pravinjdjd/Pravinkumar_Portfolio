import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';

import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechEcosystem } from './components/TechEcosystem';
import { DeveloperStack } from './components/DeveloperStack';
import { DeveloperJourney } from './components/DeveloperJourney';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ProjectsPage } from './pages/ProjectsPage';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

const basePath = import.meta.env.BASE_URL;

const currentPath = window.location.pathname;

const isProjectsPage =
  currentPath === `${basePath}projects` ||
  currentPath === `${basePath}projects/`;
  
  useEffect(() => {
    // Don't track home sections on Projects page
    if (isProjectsPage) {
      return;
    }

    const sectionIds = [
      'home',
      'about',
      'ecosystem',
      'skills',
      'journey',
      'education',
      'contact'
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    let frameId = null;

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = requestAnimationFrame(() => {
        const marker = window.scrollY + window.innerHeight * 0.3;
        let current = 'home';

        for (const element of sections) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;

          if (marker >= top) {
            current = element.id;
          }
        }

        setActiveSection((previous) =>
          previous === current ? previous : current
        );

        frameId = null;
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isProjectsPage]);

  // ============================================
  // SEPARATE PROJECTS PAGE
  // ============================================
  if (isProjectsPage) {
    return (
      <div className="app-root">
        <BackgroundCanvas />
        <CustomCursor />

        <ProjectsPage
          projects={portfolioData.projects}
          personalInfo={portfolioData.personal}
        />
      </div>
    );
  }

  // ============================================
  // MAIN PORTFOLIO PAGE
  // ============================================
  return (
    <div className="app-root">
      {/* Background Interactive Particle Canvas */}
      <BackgroundCanvas />

      {/* Desktop Lagging Cursor Effect */}
      <CustomCursor />

      {/* Top Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        personalInfo={portfolioData.personal}
      />

      {/* Main Content Flow */}
      <main>
        <Hero
          personalInfo={portfolioData.personal}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <About
          personalInfo={portfolioData.personal}
          stats={portfolioData.stats}
        />

        <TechEcosystem
          techEcosystem={portfolioData.techEcosystem}
        />

        <DeveloperStack />

        {/* Projects section removed from main portfolio */}

        <DeveloperJourney
          journey={portfolioData.journey}
        />

        <Education
          education={portfolioData.education}
        />

        <ResumeSection
          personalInfo={portfolioData.personal}
          education={portfolioData.education}
          isModalOpen={isResumeModalOpen}
          onOpenModal={() => setIsResumeModalOpen(true)}
          onCloseModal={() => setIsResumeModalOpen(false)}
        />

        <ContactSection
          personalInfo={portfolioData.personal}
        />
      </main>

      {/* Signature Footer */}
      <Footer
        personalInfo={portfolioData.personal}
      />
    </div>
  );
}

export default App;