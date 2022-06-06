import React, { useState } from "react";
import "./Hero.css";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { SiMaildotru } from "react-icons/si";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="hero-section" id="hero">
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

      <div className="hero-navbar-menu">
        <img src={images.mobilelogo} alt="mobile logo" />
        <HiMenu className="menu" onClick={() => setToggle(true)} />
      </div>
        <div>
        {toggle && (
          <motion.div
            className="slider"
            whileInView={{ y: [-200, 0] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HiX className="close-icon" onClick={() => setToggle(false)} />

            <ul>
              <li>
                <a href="#About" onClick={() => setToggle(false)}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#Skills" onClick={() => setToggle(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#Portfolio" onClick={() => setToggle(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#Contact" onClick={() => setToggle(false)}>
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>

      <div className="mobile-content">
        <p className="mobile-name">my name is Thomas</p>
        <h1 className="mobile-job">I'M A DEVELOPER</h1>
        <img
          className="white-separator"
          src={images.whiteline}
          alt="separator"
        />

        <div className="mobile-links">
          <a
            href="mailto:iyiegbukosi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMaildotru className="mobile-hero-mail" />
          </a>
          <a
            href="https://github.com/KillerKvothe117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub className="mobile-hero-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-iyiegbu-19659a125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin className="mobile-hero-linkedin" />
          </a>
        </div>
      </div>

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
