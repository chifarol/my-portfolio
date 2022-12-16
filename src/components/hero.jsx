import React from "react";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
} from "./svgs";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-sub-1">
        <div className="hero-sub-container">
          <h4 className="hero-sub-1-intro">Hi I’m Ilodigwe Chinaza, a</h4>
          <div className="hero-sub-1-titles">
            <h1>Fullstack Web Developer</h1>
          </div>
          <p className="hero-sub-1-desc type5">
            I’m a software developer with over 4 years of experience and I love
            building stuff for the web. Over the years I’ve garnered great
            skills with which I deliver a variety of services ranging from
            Web/UI Design, Front-end/Back-end Development and WordPress
            Themes/Plugins Development.
          </p>
        </div>
        <a href="/tech-cv-2022.pdf" className="hero-sub-1-resume" download>
          Download Resume
        </a>
        <div className="hero-sub-1-icons">
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
      <div className="hero-sub-2">
        <img src="/memoji.png" alt="memoji_avatar" />
      </div>
    </div>
  );
};

export default Hero;
