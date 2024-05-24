import React from "react";
import "../styles/hero.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Front-End Developer & Java Developer{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="hero-subtitle">
          Hi, I'm <strong>Virendra Kumar Paswan</strong>. A passionate Front-end and Java Developer
          based in India{" "}
          <span role="img" aria-label="location pin">
            📍
          </span>
        </p>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/virendra-kumar-paswan/">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Vi042001/">
            <FaGithub />{" "}
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={"/images/profile.png"} alt="Virendra Paswan" />
      </div>
    </section>
  );
};

export default Hero;
