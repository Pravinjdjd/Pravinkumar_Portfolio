import React, { useState } from 'react';
import { Layout, Network, Server, Database, ArrowRight, CheckCircle2, Zap, Terminal } from 'lucide-react';
import './Hero.css';

export const HeroAnimation = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      id: 'frontend',
      title: 'React.js Client UI',
      subtitle: 'Component Layer',
      icon: Layout,
      color: '#00f2fe',
      payload: 'JSX Components • State Hooks • Reactive Virtual DOM'
    },
    {
      id: 'api',
      title: 'REST API & Servlets',
      subtitle: 'Middleware Endpoint',
      icon: Network,
      color: '#38bdf8',
      payload: 'GET/POST Dispatcher • JSON Data Stream • CORS Headers'
    },
    {
      id: 'backend',
      title: 'Java & Spring Boot',
      subtitle: 'Enterprise Backend',
      icon: Server,
      color: '#8b5cf6',
      payload: 'Java Services • JEE MVC • Spring Data JPA & Hibernate'
    },
    {
      id: 'database',
      title: 'MySQL Relational DB',
      subtitle: 'Persistence Store',
      icon: Database,
      color: '#10b981',
      payload: 'Normalized Schemas • SQL Foreign Keys • Connection Pool'
    }
  ];

  return (
    <div className="hero-animation-card glass-card">
      <div className="hero-animation-header">
        <div className="window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title-tag">
          <Terminal size={14} className="icon-cyan" />
          <span>Full-Stack Architecture Tree</span>
        </div>
      </div>

      <div className="architecture-flow-container">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = activeNode === index;

          return (
            <React.Fragment key={node.id}>
              {/* Architecture Node Box */}
              <div
                className={`flow-node-box ${isActive ? 'active-node' : ''}`}
                onMouseEnter={() => setActiveNode(index)}
                style={{
                  '--node-accent': node.color
                }}
              >
                <div className="node-icon-badge" style={{ backgroundColor: `${node.color}15`, color: node.color }}>
                  <Icon size={20} />
                </div>
                <div className="node-info">
                  <div className="node-title">{node.title}</div>
                  <div className="node-subtitle">{node.subtitle}</div>
                </div>
                {isActive && <Zap size={14} className="node-active-flash" style={{ color: node.color }} />}
              </div>

              {/* Connecting Pipeline Line */}
              {index < nodes.length - 1 && (
                <div className="flow-pipeline-line">
                  <div className="animated-data-packet" style={{ backgroundColor: node.color }} />
                  <ArrowRight size={14} className="pipeline-arrow" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Node Payload Terminal Display */}
      <div className="node-payload-terminal">
        <div className="terminal-prompt">
          <span className="prompt-symbol">$</span>
          <span className="prompt-cmd">payload_stream --node={nodes[activeNode].id}</span>
        </div>
        <div className="terminal-output" style={{ color: nodes[activeNode].color }}>
          <CheckCircle2 size={14} />
          <span>{nodes[activeNode].payload}</span>
        </div>
      </div>
    </div>
  );
};
