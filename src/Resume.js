import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "New Jersey Institute of Technology (NJIT), Newark, NJ",
      year: "2022–2026",
      gpa: "GPA: 3.2/4.0"
    },
    {
      degree: "High School Diploma",
      school: "County Prep High School, Jersey City, NJ",
      year: "2019–2022",
      gpa: "GPA: 3.9/4.0"
    }
  ];

  const experience = [
    {
      title: "After School Instructor",
      company: "CodeAdvantage",
      period: "Sep 2025 – Present",
      responsibilities: [
        "Teach coding/STEM lessons to 10–15 K–8 students by adapting lesson plans and building confidence.",
        "Set up and maintain laptops, projectors, and software so all students have uninterrupted access.",
        "Guide projects with one-on-one support to boost engagement and learning.",
        "Collaborate with co-instructors and parents to track progress and improve lessons."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Mussab Ali for Mayor Campaign",
      period: "Jun 2025 – Sep 2025",
      responsibilities: [
        "Created AI avatar videos with HeyGen, ElevenLabs, and n8n to support campaign messaging.",
        "Automated video delivery using JSON/JavaScript workflows to reduce manual work and save time.",
        "Worked with designers and organizers to align AI tools with campaign goals and outreach."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Urban Food Alliance",
      period: "Jul 2024 – Aug 2024",
      responsibilities: [
        "Built a food tracking app with Dart and Android Studio to support nonprofit operations.",
        "Implemented features to improve usability and streamline workflows.",
        "Tested and debugged across devices to ensure stable performance."
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C++", "C#", "SQL", "Bash", "Dart"],
    "Frameworks & Libraries": ["React", "Node.js", "Unity", "Pandas", "NumPy", "Tableau"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "Android Studio", "Jupyter Notebook", "Google Colab", "n8n", "Linux", "Ubuntu"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
