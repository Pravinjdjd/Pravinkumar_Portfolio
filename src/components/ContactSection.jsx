import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import './ContactSection.css';

export const ContactSection = ({ personalInfo }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = personalInfo.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error('Copy email failed:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a full-time software developer opening, a freelance web project, or just want to connect—my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-card glass-card">
            <div className="info-header">
              <Sparkles size={20} className="icon-cyan" />
              <h3>Open For Opportunities</h3>
            </div>

            <p className="contact-bio-text">
              I am actively seeking Full-Stack Web Developer positions and freelance development contracts. Feel free to reach out directly via email or social networks.
            </p>

            {/* Email Copy Card */}
            <div className="email-copy-box">
              <div className="email-label-group">
                <Mail size={18} className="icon-cyan" />
                <span className="email-text">{personalInfo.email}</span>
              </div>
              <button 
                className="copy-btn" 
                onClick={handleCopyEmail}
                aria-label="Copy Email Address"
              >
                {copied ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="contact-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="location-tag">
              📍 {personalInfo.location} • Remote & On-site Ready
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card glass-card">
            <h3 className="form-title">
              <MessageSquare size={18} className="icon-cyan" />
              Send Me A Message
            </h3>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details or Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Hi Pravin, I'd like to discuss a web application project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
