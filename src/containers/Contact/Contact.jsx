import React from "react";
import "./Contact.css";
import { images } from "../../constants";

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
      <header className="contact-header">
        <h2>CONTACT</h2>
      </header>

      <div className="contact-intro">
        <p className="contact-intro-text">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem <br /> sed viverra. In vel
          urna quis libero viverra facilisis ut ac est.
        </p>

        <img className="blackline" src={images.blackline} alt="separator"/>
      </div>

      <form id="contact-form">
        <label htmlFor="name"></label>
        <input type="text" id="name" placeholder="Enter Your Name*" />
        <label htmlFor="email"></label>
        <input type="email" id="email" placeholder="Enter Your Email*" />
        <label htmlFor="phone_number"></label>
        <input type="tel" id="phone_number" placeholder="Enter Your Phone Number*" />
        <label htmlFor="message"></label>
        <textarea id="message" placeholder="Enter Your Message*" />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
