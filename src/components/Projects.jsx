const Projects = () => {
  return (
    <section id="projects" className="section">
      <h3>Projects</h3>

      <div className="projects-grid">
        <div className="project-card">
          <h4>Solar System 3D Simulation</h4>
          <p>
            Built an interactive 3D solar system with orbit controls and speed adjustment,
            focusing on performance and user interaction.
          </p>
          <p className="tech">Three.js, JavaScript</p>
          <a href="#">Live</a> | <a href="#">GitHub</a>
        </div>

        <div className="project-card">
          <h4>Portfolio Website</h4>
          <p>
            Personal responsive portfolio built to showcase projects and skills.
          </p>
          <p className="tech">HTML, CSS, React</p>
          <a href="#">Live</a> | <a href="#">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
