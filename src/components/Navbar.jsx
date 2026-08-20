import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Send } from 'lucide-react';
import './Navbar.css';

export const Navbar = ({ activeSection, personalInfo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

const basePath = import.meta.env.BASE_URL;

const isProjectsPage =
  window.location.pathname === `${basePath}projects` ||
  window.location.pathname === `${basePath}projects/`;

  useEffect(() => {
    let frameId = null;

    const updateScrollState = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0
          ? Math.min(
              100,
              Math.max(0, (window.scrollY / totalHeight) * 100)
            )
          : 0;

      const scrolled = window.scrollY > 40;

      setIsScrolled((previous) =>
        previous === scrolled ? previous : scrolled
      );

      setScrollProgress((previous) =>
        Math.abs(previous - progress) < 0.1 ? previous : progress
      );

      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Skills', href: '#skills' },

    // Projects is now a separate page
    { name: 'Projects', href: '/projects', isPage: true },

    { name: 'Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavigation = (link) => {
    setMobileMenuOpen(false);

    if (link.isPage) {
      window.location.href = `${basePath}projects`;
      return;
    }

    // If currently on Projects page, return to home first
    if (isProjectsPage) {
      window.location.href = `${basePath}${link.href.substring(1)}`;
      return;
    }

    window.location.hash = link.href.substring(1);
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">

          {/* Logo */}
          <a
            href="/"
            className="navbar-logo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="logo-icon-wrapper">
              <Code2 size={22} className="logo-icon" />
            </div>

            <div className="logo-text">
              <span className="logo-name">
                {personalInfo.name.split(' ')[0]}
              </span>

              <span className="logo-dot">
                .dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-menu-desktop">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');

              const isActive = link.isPage
                ? isProjectsPage
                : activeSection === sectionId;

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={(event) => {
                      if (link.isPage) {
                        event.preventDefault();
                        handleNavigation(link);
                      } else if (isProjectsPage) {
                        event.preventDefault();
                        handleNavigation(link);
                      }
                    }}
                  >
                    {link.name}

                    {isActive && (
                      <span className="active-glow-dot" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Contact Action CTA */}
          <div className="navbar-actions">

            <a
              href={isProjectsPage ? '/#contact' : '#contact'}
              className="nav-cta-btn"
              onClick={(event) => {
                if (isProjectsPage) {
                  event.preventDefault();
                  window.location.href = '/#contact';
                }
              }}
            >
              <Send size={15} />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="mobile-menu-content"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="mobile-menu-header">
                <div className="logo-text">

                  <span className="logo-name">
                    {personalInfo.name}
                  </span>

                  <span className="logo-tag">
                    Full-Stack & Freelancer
                  </span>

                </div>

                <button
                  className="close-mobile-btn"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="mobile-nav-list">

                {navLinks.map((link) => (
                  <li key={link.name}>

                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={(event) => {
                        if (link.isPage) {
                          event.preventDefault();
                          handleNavigation(link);
                        } else if (isProjectsPage) {
                          event.preventDefault();
                          handleNavigation(link);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {link.name}
                    </a>

                  </li>
                ))}

              </ul>

              <div className="mobile-menu-footer">

                <a
                  href={
                    isProjectsPage
                      ? '/#contact'
                      : '#contact'
                  }
                  className="btn-primary"
                  style={{ width: '100%' }}
                  onClick={(event) => {
                    if (isProjectsPage) {
                      event.preventDefault();
                      window.location.href = '/#contact';
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  <Sparkles size={16} />
                  Contact Me
                </a>

              </div>

            </div>
          </div>
        )}
      </nav>
    </>
  );
};