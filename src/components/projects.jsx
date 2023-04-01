import React from "react";

const ProjectCard = ({
  image,
  type,
  title,
  desc,
  tags = ["HTML", "CSS"],
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        {image}
      </div>
      <div className="project-card-intro">
        <h4>{title}</h4>
        <p className="type5">{desc}</p>
      </div>
      <div className="project-card-tags">
        {tags.map((tag) => (
          <span className="project-card-tag type6" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card-links type6">
        <a href={demoUrl} target="_blank">
          Demo
        </a>
        <a href={codeUrl} target="_blank">
          &#60;Code&#47;&#62;
        </a>
      </div>
    </div>
  );
};
import {
  LoycyImg,
  ExbImg,
  QuickrpayImg,
  QuickrpayDashboardImg,
  ChatboxxImg,
  EStoreImg,
  TweeterImg,
  SimplePlaylistImg,
  PortfolioImg,
  WindBnBImg,
  HuddleImg,
  EdieImg,
  InteriorImg,
  GalleryImg,
  CheckoutImg,
} from "./images";

export const ProjectCards = () => {
  const projects = [
    {
      image: <ExbImg />,
      type: "excellent-bridge",
      title: "Excellent Bridge Website Redesign",
      desc: "",
      tags: ["Tailwindcss", "PHP", "Laravel"],
      demoUrl: "https://excellentbridge.com/",
      codeUrl: "#",
    },
    {
      image: <QuickrpayDashboardImg />,
      type: "quickr-pay-dashboard",
      title: "Quickr Pay Dashboard (Demo)",
      desc: "User Dashboard for Quickr Pay App (coming soon)",
      tags: ["React", "Redux Toolkit"],
      demoUrl: "",
      codeUrl: "#",
    },
    {
      image: <LoycyImg />,
      type: "loycy-engineering",
      title: "Loycy Engineering",
      desc: "Website redesign for Loycy Investment Company",
      tags: ["NextJS", "Tailwindcss"],
      demoUrl: "https://loycy-engineering.vercel.app/",
      codeUrl: "#",
    },
    {
      image: <QuickrpayImg />,
      type: "quickr-pay",
      title: "Quickr Pay Landing Page (Demo)",
      desc: "Landing Page for Quickr Pay (coming soon)",
      tags: ["React"],
      demoUrl: "https://merry-zuccutto-2a0de3.netlify.app/",
      codeUrl: "#",
    },
    {
      image: <EStoreImg />,
      type: "estore-pay",
      title: "Crown Mart (Demo)",
      desc: "A mini online store front",
      tags: ["React", "Firebase"],
      demoUrl: "https://voluble-tarsier-52a7ee.netlify.app/",
      codeUrl: "https://github.com/chifarol/Crown-Clothing",
    },
    {
      image: <ChatboxxImg />,
      type: "chatboxx",
      title: "Chatboxx (Demo)",
      desc: "A chat app where users can send and receive direct or group messages",
      tags: ["MERN", "Socket.io", "Cloudinary"],
      demoUrl: "https://chatboxx.onrender.com/login",
      codeUrl: "https://github.com/chifarol/chatboxx",
    },
    {
      image: <SimplePlaylistImg />,
      type: "simple",
      title: "Simple Playlist (Plugin)",
      desc: "A WordPress playlist plugin with color customizations",
      tags: ["PHP", "Wordpress"],
      demoUrl: "https://github.com/chifarol/WP-Simple-Playlist",
      codeUrl: "https://github.com/chifarol/WP-Simple-Playlist",
    },
    {
      image: <TweeterImg />,
      type: "tweeter",
      title: "Tweeter (Demo)",
      desc: "A simple version of twitter built with React and Django",
      tags: ["Django", "React", "Cloudinary"],
      demoUrl: "https://tweeter-react-django.onrender.com/login",
      codeUrl: "https://github.com/chifarol/tweeter",
    },
    {
      image: <PortfolioImg />,
      type: "portfolio",
      title: "Portfolio Website",
      desc: "A portfolio website",
      tags: ["React"],
      demoUrl: "https://chifarol.github.io/my-portfolio/",
      codeUrl: "https://github.com/chifarol/my-portfolio/",
    },
    {
      image: <WindBnBImg />,
      type: "windbnb",
      title: "WindBnB (Demo)",
      desc: "An AirBnB inspired website demo.",
      tags: ["React"],
      demoUrl: "https://csb-jgr6d1.netlify.app/",
      codeUrl: "https://github.com/chifarol/WindBnB",
    },
    {
      image: <HuddleImg />,
      type: "huddle",
      title: "Huddle Landing Page (Demo)",
      desc: "Huddle Landing page clone",
      tags: ["HTML", "CSS"],
      demoUrl: "https://chifarol.github.io/zuri-wk5-Task-2-Hubble/",
      codeUrl: "https://github.com/chifarol/zuri-wk5-Task-2-Hubble",
    },
    {
      image: <EdieImg />,
      type: "edie",
      title: "Edie (Demo)",
      desc: "Home Page for a fictional company",
      tags: ["HTML", "CSS"],
      demoUrl: "https://chifarol.github.io/devChallenges-Responsive-Design-Task-6---Edie-homepage-Page/",
      codeUrl: "https://github.com/chifarol/devChallenges-Responsive-Design-Task-6---Edie-homepage-Page",
    },
    {
      image: <GalleryImg />,
      type: "gallery",
      title: "Gallery Page (Demo)",
      desc: "Gallery page for a fictional personal portfolio website",
      tags: ["HTML", "CSS"],
      demoUrl: "https://chifarol.github.io/devChallenges---Responsive-Design-my-gallery-/",
      codeUrl: "https://github.com/chifarol/devChallenges---Responsive-Design-my-gallery-",
    },
    {
      image: <CheckoutImg />,
      type: "checkout",
      title: "Checkout Page (Demo)",
      desc: "Checkout page for a fictional E-Commerce site",
      tags: ["HTML", "CSS"],
      demoUrl: "https://chifarol.github.io/devChallenges-Responsive-Design-Task-6---Checkout-Page/",
      codeUrl: "https://github.com/chifarol/devChallenges-Responsive-Design-Task-6---Checkout-Page",
    }
  ]
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          type={project.type}
          title={project.title}
          desc={project.desc}
          tags={project.tags}
          demoUrl={project.demoUrl}
          codeUrl={project.codeUrl}
        />
      ))}

    </>
  );
};

export default ProjectCards;
