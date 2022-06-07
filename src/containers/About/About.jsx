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
            I am Kosi Iyiegbu, a highly creative Front-End Developer with a
            passion for building beautiful and functional websites.
            <br />I write code that is great and simple to understand in order
            to work better with teams. I have some <br />
            experience building projects with various libraries and tools such
            as
            <br /> HTML, CSS, JavaScript, React, Styled-Components.
          </p>

          <p className="explore">SERVICES</p>

          <img className="blackline" src={images.blackline} alt="separator" />
        </div>
      </div>

      <div className="services-container">
        <div className="about-services">
          <div className="dev-services">
            <img src={images.development} alt="dev-logo" className="dev-logo" />
            <div className="dev-text">
              <h3>DEVELOPMENT</h3>
              <p>
                I can develop the site based on your needs and suggestions. I
                can
                <br />
                also consult you during the job for suggestions.
              </p>
            </div>
          </div>

          <div className="maint-services">
            <img
              src={images.maintenance}
              alt="maint-logo"
              className="maint-logo"
            />
            <div className="maint-text">
              <h3>MAINTENANCE</h3>
              <p>
                You can leave the maintenace of your site to me. I can make
                <br /> sure the site has what it needs to be kept running and
                functional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="separator">
        <img
          className="blackline"
          src={images.blackline}
          alt="black-separator"
        />
      </div>
      <Skills />
    </div>
  );
};

export default About;
