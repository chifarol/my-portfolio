import React from "react";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
  BehanceIcon
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
        <a href="http://twitter.com/ilodigwechinaza" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://github.com/chifarol" target="_blank">
          <GithubIcon />
        </a>
        <a href="mailto:ilodigwecinaza@gmail.com?" target="_blank">
          <MailIcon />
        </a>
        <a href="https://wa.me/2349050741851" target="_blank">
          <WhatsappIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/chinaza-ilodigwe-05b435186"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.behance.net/ilodigwechinaza"
          target="_blank"
        >
          <BehanceIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
