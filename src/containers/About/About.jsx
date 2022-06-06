import React from "react";
import Skills from "../Skills/Skills";
import "./About.css";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="about-section" id="About">
      <header className="about-header">
        <h2>ABOUT ME</h2>
      </header>

      <div className="about-content">
        <div className="about-intro">
          <p className="about-intro-text">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem <br /> sed viverra. In vel
            urna quis libero viverra facilisis ut ac est.
          </p>

          <p className="explore">EXPLORE</p>

          <img className="blackline" src={images.blackline} alt="separator" />
        </div>
      </div>

      <div className="services-container">
        <div className="about-services">
          <div className="design-services">
            <img
              src={images.design}
              alt="design-logo"
              className="design-logo"
            />
            <h3>DESIGN</h3>
            <p>
              I can design the site based on your needs and suggestions. I can
              <br /> also design the site from scratch and consult you during
              the job.
            </p>
          </div>

          <div className="dev-services">
            <img src={images.development} alt="dev-logo" className="dev-logo" />
            <h3>DEVELOPMENT</h3>
            <p>
              I can design the site based on your needs and suggestions. I can
              <br /> also design the site from scratch and consult you during
              the job.
            </p>
          </div>

          <div className="maint-services">
            <img
              src={images.maintenance}
              alt="maint-logo"
              className="maint-logo"
            />
            <h3>MAINTENANCE</h3>
            <p>
              I can design the site based on your needs and suggestions. I can
              <br /> also design the site from scratch and consult you during
              the job.
            </p>
          </div>
        </div>
      </div>

      <div className="separator">
      <img className="blackline" src={images.blackline} alt="black-separator" />
      </div>
      <Skills />
    </div>
  );
};

export default About;
