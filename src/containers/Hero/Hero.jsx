import React from "react";
import "./Hero.css";
import { images } from "../../constants";
import { SiMaildotru } from "react-icons/si";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="hero-section">
      <nav className="hero-navbar">
        <div className="logo">
          <img src={images.pclogo} alt="logo" />
        </div>

        <ul className="hero-links">
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Contact">Contact Me</a>
          </li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="hero-about">
          <p className="introduction">Hi, I am</p>
          <h1 className="name">Tomasz Gajda</h1>
          <p className="profession">Front-End Designer / UI Designer</p>
        </div>

        <div className="hero-image">
          <img src={images.hero} alt="profile pic" />
        </div>
      </div>
      <div className="hero-social-links">
        <a
          href="mailto:iyiegbukosi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMaildotru className="hero-mail" />
        </a>
        <a
          href="https://github.com/KillerKvothe117"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGithub className="hero-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-iyiegbu-19659a125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin className="hero-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
