import React from "react";
import "./Footer.css";
import { BiChevronsUp } from "react-icons/bi";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="top-nav">
        <a href="#hero">
          <BiChevronsUp />
        </a>
        <a href="#hero">BACK TO TOP</a>
      </div>

      <div className="footer-socials">
        <a href="www.facebook.com" target="_blank">
          <AiOutlineFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-iyiegbu-19659a125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://www.instagram.com/_kkvothe_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="mailto: iyiegbuk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>

      <div className="copyrights">
        <p>&#64;2020 Tomasz Gajda</p>
        <p className="rights">All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
