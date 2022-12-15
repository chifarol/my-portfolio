import React from "react";
import {
  ChatboxxImg,
  TweeterImg,
  SimplePlaylistImg,
  WindBnBImg,
  HuddleImg,
  EdieImg,
  InteriorImg,
  GalleryImg,
  CheckoutImg,
} from "./images";

const ProjectCard = ({ type, title, desc, tags, demoUrl, codeUrl }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        {type == "chatboxx" ? (
          <ChatboxxImg />
        ) : type == "tweeter" ? (
          <TweeterImg />
        ) : type == "simple" ? (
          <SimplePlaylistImg />
        ) : type == "windbnb" ? (
          <WindBnBImg />
        ) : type == "huddle" ? (
          <HuddleImg />
        ) : type == "edie" ? (
          <EdieImg />
        ) : type == "interior" ? (
          <InteriorImg />
        ) : type == "gallery" ? (
          <GalleryImg />
        ) : (
          <CheckoutImg />
        )}
      </div>
      <div className="project-card-intro">
        <h4>{title}</h4>
        <h4>{desc}</h4>
      </div>
      <div className="project-card-tags">
        {tags.map((tag) => (
          <span className="project-card-tag">{tag}</span>
        ))}
      </div>
      <div className="project-card-links">
        <a href={demoUrl}>Demo</a>
        <a href={codeUrl}>&#60;Code&#47;&#62;</a>
      </div>
    </div>
  );
};

export const ProjectCards = () => {
  return (
    <>
      <ProjectCard
        type="chatboxx"
        title="Chatboxx"
        desc="A chat app where users can send and receive direct or group messages"
        tags={["MERN", "Socket.io", "Cloudinary"]}
        demoUrl="https://chatboxx.onrender.com/login"
        codeUrl="https://github.com/chifarol/chatboxx"
      />

      <ProjectCard
        type="tweeter"
        title="Tweeter"
        desc="A simple version of twitter built with React and Django"
        tags={["Django", "React", "Cloudinary"]}
        demoUrl="https://tweeter-react-django.onrender.com/login"
        codeUrl="https://github.com/chifarol/tweeter"
      />

      <ProjectCard
        type="simple"
        title="Simple Playlist"
        desc="A WordPress playlist plugin with color customizations"
        tags={["PHP", "Wordpress"]}
        demoUrl="https://github.com/chifarol/WP-Simple-Playlist"
        codeUrl="https://github.com/chifarol/WP-Simple-Playlist"
      />

      <ProjectCard
        type="windbnb"
        title="WindBnB"
        desc="An AirBnB inspired website."
        tags={["React"]}
        demoUrl="https://jgr6d1.csb.app/"
        codeUrl="https://github.com/chifarol/WindBnB"
      />
      <ProjectCard
        type="huddle"
        title="Huddle Landing Page"
        desc="Huddle Landing page clone"
        tags={["HTML", "CSS"]}
        demoUrl="https://chifarol.github.io/zuri-wk5-Task-2-Hubble/"
        codeUrl="https://github.com/chifarol/zuri-wk5-Task-2-Hubble"
      />
      <ProjectCard
        type="edie"
        title="Home Page for a fictional company"
        desc={["HTML", "CSS"]}
        tags="Gallery page for a fictional person"
        demoUrl="https://chifarol.github.io/devChallenges-Responsive-Design-Task-6---Edie-homepage-Page/"
        codeUrl="https://github.com/chifarol/devChallenges-Responsive-Design-Task-6---Edie-homepage-Page"
      />
      <ProjectCard
        type="interior"
        title="Interior Decor"
        desc=""
        tags={["HTML", "CSS"]}
        demoUrl="https://chifarol.github.io/devChallenges-responsive-interior-decor-/"
        codeUrl="https://github.com/chifarol/devChallenges-responsive-interior-decor-"
      />
      <ProjectCard
        type="gallery"
        title="Gallery Page"
        desc="Gallery page for a fictional person"
        tags={["HTML", "CSS"]}
        demoUrl="https://chifarol.github.io/devChallenges---Responsive-Design-my-gallery-/"
        codeUrl="https://github.com/chifarol/devChallenges---Responsive-Design-my-gallery-"
      />
      <ProjectCard
        type="checkout"
        title="Checkout Page"
        desc="Gallery page for a fictional E-Commerce site"
        tags={["HTML", "CSS"]}
        demoUrl="https://chifarol.github.io/devChallenges-Responsive-Design-Task-6---Checkout-Page/"
        codeUrl="https://github.com/chifarol/devChallenges-Responsive-Design-Task-6---Checkout-Page"
      />
    </>
  );
};

export default ProjectCards;
