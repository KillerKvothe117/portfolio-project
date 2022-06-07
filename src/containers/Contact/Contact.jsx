import React from "react";
import "./Contact.css";
import { images } from "../../constants";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
      <header className="contact-header">
        <h2>CONTACT</h2>
      </header>

      <div className="contact-intro">
        <p className="contact-intro-text">
          Would you love to work with me?
          <br /> Don't hesitate to reach out to me via email or social media.
        </p>

        <div className="contact-socials">
          <a
            href="https://twitter.com/Kvothe_Killer"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-icon"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-iyiegbu-19659a125/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_kkvothe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="mailto: iyiegbuk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-icon"
          >
            <AiOutlineMail />
          </a>
        </div>

        <img className="blackline" src={images.blackline} alt="separator" />
      </div>

      <form id="contact-form">
        <label htmlFor="name"></label>
        <input type="text" id="name" placeholder="Enter Your Name*" />
        <label htmlFor="email"></label>
        <input type="email" id="email" placeholder="Enter Your Email*" />
        <label htmlFor="phone_number"></label>
        <input
          type="tel"
          id="phone_number"
          placeholder="Enter Your Phone Number*"
        />
        <label htmlFor="message"></label>
        <textarea id="message" placeholder="Enter Your Message*" />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
