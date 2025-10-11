// src/Portfolio.js
import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: '', // placeholder
          title: 'Basic Calculator (Unity)',
          description:
            'An interactive calculator with number input, dropdowns, drawing, and light toggling.',
          technologies: ['C#', 'Unity'],
          liveDemo: 'https://maryammughal.itch.io/calculator-project',
          viewCode: 'https://maryammughal.itch.io/calculator-project'
        },
        {
          project_image: '', // placeholder
          title: 'DFA Email Validator',
          description:
            'Deterministic finite automaton that validates .gov and .gr email formats with step tracking.',
          technologies: ['Python'],
          liveDemo: 'https://github.com/mmaryam28/DFA-Email-Validator',
          viewCode: 'https://github.com/mmaryam28/DFA-Email-Validator'
        }
      ]
    };
  }

  render() {
    return (
      <section className="portfolio-section">
        <h1 className="portfolio-title">My Portfolio</h1>

        <div className="project-grid">
          {this.state.projects.map((p, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image">Project Image</div>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="tech-list">
                  {p.technologies.map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a className="btn primary" href={p.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a className="btn" href={p.viewCode} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
