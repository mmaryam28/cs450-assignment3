import { Component } from 'react';
import './About.css';
import profilePic from './assets/myimage.JPG'; // ✅ import your actual photo

class About extends Component {
  render() {
    const skills = ['React', 'JavaScript', 'CSS3', 'HTML5', 'Node.js', 'Git'];

    return (
      <section className="about-section">
        <h1 className="about-title">About Me</h1>

        <div className="about-container">
          <div className="about-photo">
            <img src={profilePic} alt="Maryam Mughal" className="profile-img" />
          </div>

          <div className="about-text">
            <p>
              Hello! I’m Maryam Mughal, a CS student who enjoys creating clean, useful
              interfaces and practical tools. I like working with modern technologies
              and learning new skills by building projects.
            </p>
            <p>
              With a background in computer science and a growing interest in full-stack
              and data tools, I focus on simple, reliable solutions and steady
              improvement on every project I work on.
            </p>

            <h3 className="about-subtitle">Skills &amp; Technologies</h3>
            <div className="skills-list">
              {skills.map((s, i) => (
                <span key={i} className="skill-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
