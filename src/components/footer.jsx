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
    <div className="footer">
      <p className="section-divider-title">Let's Work Together</p>
      <p className="section-divider-desc">
        You can reach out to me on these platforms
      </p>
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
    </div>
  );
};

export default Footer;
