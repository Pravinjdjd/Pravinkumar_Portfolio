import React, { useState } from 'react';
import { Layers, Layout, Network, Server, Database, Wrench, ChevronRight, Zap } from 'lucide-react';
import './TechEcosystem.css';

export const TechEcosystem = ({ techEcosystem }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    frontend: Layout,
    api: Network,
    backend: Server,
    database: Database,
    tools: Wrench
  };

  const categories = [
    { id: 'all', label: 'All Ecosystem Layers' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'api', label: 'API Layer' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Dev Tools' }
  ];

  const keysToDisplay = activeCategory === 'all'
    ? Object.keys(techEcosystem)
    : [activeCategory];

  return (
    <section id="ecosystem" className="section-padding ecosystem-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Architecture & Stack</span>
          </div>
          <h2 className="section-title">
            Interactive Tech <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="section-subtitle">
            An architectural overview of how my technology choices connect across client, API, business logic, data, and devtool layers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="ecosystem-tabs-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`ecosystem-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Ecosystem Layers Flow */}
        <div className="ecosystem-layers-container">
          {keysToDisplay.map((key, layerIdx) => {
            const layer = techEcosystem[key];
            const LayerIcon = categoryIcons[key] || Layers;

            return (
              <React.Fragment key={key}>
                <div className="ecosystem-layer-card glass-card" style={{ '--layer-color': layer.color }}>
                  <div className="layer-header">
                    <div className="layer-title-group">
                      <div className="layer-icon-badge" style={{ backgroundColor: `${layer.color}15`, color: layer.color }}>
                        <LayerIcon size={20} />
                      </div>
                      <div>
                        <h3 className="layer-title">{layer.title}</h3>
                        <p className="layer-desc">{layer.description}</p>
                      </div>
                    </div>
                    <span className="layer-count-badge">{layer.items.length} Techs</span>
                  </div>

                  <div className="layer-items-grid">
                    {layer.items.map((item, idx) => (
                      <div key={idx} className="tech-item-node">
                        <div className="tech-node-top">
                          <span className="tech-name">{item.name}</span>
                          <span className={`tech-level-pill level-${item.level.toLowerCase()}`}>
                            {item.level}
                          </span>
                        </div>
                        <p className="tech-node-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connecting Arrow between layers when showing ALL */}
                {activeCategory === 'all' && layerIdx < keysToDisplay.length - 1 && (
                  <div className="layer-flow-connector">
                    <div className="flow-down-line" />
                    <ChevronRight size={18} className="connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
