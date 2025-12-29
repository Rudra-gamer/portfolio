import profile from "../assets/profile.jpg";
import RESUME from "../assets/Rudra.pdf";

// import { useEffect, useState } from "react"; // Removed as it was unused

const Hero = () => {
  return (
    <section className="hero hero-layout">
      {/* Left: Text */}
      <div className="hero-text">
        <h2>
          Hi, I’m <span>Rudra Nahak</span>
        </h2>

        <p className="hero-subtitle">
          Frontend Developer building clean, responsive web apps with JavaScript
          & React
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href={RESUME} className="btn secondary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <span className="status-badge">Open to work</span>
        <img src={profile} alt="Rudra Nahak" />
      </div>
    </section>
  );
};

export default Hero;
