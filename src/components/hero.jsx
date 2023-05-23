import React, { useEffect, useState } from "react";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
  BehanceIcon
} from "./svgs";
const titles = [
  "Fullstack Web \n Developer",
  "Front-End \n Developer",
  "Back-End \n Developer",
  "UI \n Designer",
];
function formatTitle(text) {
  return text.split(/\n+/).map((title, index) => <p key={index}>{title}</p>);
}
const Hero = () => {
  const [title, setTitle] = useState(titles[0]);
  const [toggleAnim, setToggleAnim] = useState(false);
  useEffect(() => {
    const insertAnim = setTimeout(() => {
      setToggleAnim(false);
    }, 100);
    const id = setTimeout(() => {
      let currentIndex = titles.indexOf(title);
      if (currentIndex === titles.length - 1) {
        currentIndex = 0;
        setTitle(titles[0]);
      } else {
        setTitle(titles[currentIndex + 1]);
      }
    }, 3000);
    const removeAnim = setTimeout(() => {
      setToggleAnim(true);
    }, 2600);
    return () => {
      clearInterval(id);
      clearInterval(insertAnim);
      clearInterval(removeAnim);
    };
  }, [title]);

  return (
    <div className="hero-section">
      <div className="hero-sub-1">
        <div className="hero-sub-container">
          <h4 className="hero-sub-1-intro">Hi I’m Ilodigwe Chinaza, a</h4>
          <div className="hero-sub-1-titles">
            <h1 className={`hero-title ${toggleAnim && "pre-animation"}`}>
              {formatTitle(title)}
            </h1>
          </div>
          <p className="hero-sub-1-desc type5">
            I’m a software developer with over 4 years of experience and I love
            building stuff for the web. Over the years I’ve garnered great
            skills with which I deliver a variety of services ranging from
            Web/UI Design, Front-end/Back-end Development and WordPress
            Themes/Plugins Development.
          </p>
        </div>
        <a
          href="/my-portfolio/ilodigwe-chinaza-tech-cv-2022.pdf"
          className="hero-sub-1-resume"
          download
        >
          Download Resume
        </a>
        <div className="hero-sub-1-icons">
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
      </div>
      <div className="hero-sub-2">
        <img src="/my-portfolio/memoji.png" alt="memoji_avatar" />
      </div>
    </div>
  );
};

export default Hero;
