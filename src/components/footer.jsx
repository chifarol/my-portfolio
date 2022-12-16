import React from "react";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
} from "./svgs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-section-title">Let's Work Together</h3>
        <p className="footer-section-desc">
          You can reach out to me on these platforms
        </p>
      </div>
      <div className="footer-icons">
        <a href="http://twitter.com/ilodigwechinaza">
          <TwitterIcon />
        </a>
        <a href="https://github.com/chifarol">
          <GithubIcon />
        </a>
        <a href="mailto:ilodigwecinaza@gmail.com?">
          <MailIcon />
        </a>
        <a href="https://wa.me/2349050741851">
          <WhatsappIcon />
        </a>
        <a href="https://www.linkedin.com/in/ilodigwe-chinaza-05b435186">
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
