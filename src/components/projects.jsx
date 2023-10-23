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
        {codeUrl && <a href={codeUrl} target="_blank">
          &#60;Code&#47;&#62;
        </a>}
      </div>
    </div>
  );
};
import {
  LoycyImg,
  ExbImg,
  GoodChoirImg,
  RzalImg,
  ChatboxxImg,
  EStoreImg,
  BlogImg,
  BlogDashboardImg,
  TweeterImg,
  SimplePlaylistImg,
  PortfolioImg,
  WindBnBImg,
  HuddleImg,
  EdieImg,
  InteriorImg,
  GalleryImg,
  CheckoutImg,
  NimiMiniImg,
  PropfirmImg,
} from "./images";

export const ProjectCards = () => {
  const projects = [
    {
      image: <PropfirmImg />,
      type: "PropfirmImg",
      title: "Propfirm Website",
      desc: "Development of wordpress theme for Propfirm - a Forex Broker Listing website",
      tags: ["Wordpress", "PHP", "ACF"],
      demoUrl: "https://propfirm.xplicitmode.com/",
      codeUrl: "",
    },
    {
      image: <NimiMiniImg />,
      type: "NimiMini",
      title: "NimiMini E-Commerce",
      desc: "Design & Development of an e-commerce website for Nimimini - a luxury fashion brand",
      tags: ["Laravel", "PHP", "AlpineJS"],
      demoUrl: "https://nimimini.com/",
      codeUrl: "",
    },
    {
      image: <GoodChoirImg />,
      type: "GoodChoirImg",
      title: "GoodChoir Official Website",
      desc: "Design & Development of the official website for the GoodChoir + Admin Dashboard",
      tags: ["TailwindCSS", "PHP"],
      demoUrl: "https://goodchoir.com/",
      codeUrl: "",
    },
    {
      image: <RzalImg />,
      type: "Rzal",
      title: "Rzal Car Rental",
      desc: "Design & Development of an online rent portal for Rzal, a car rental service based in Nigeria",
      tags: ["Typescript", "NextJS", "Headless WordPress", "TailwindCSS"],
      demoUrl: "https://rzal.vercel.app/",
      codeUrl: "",
    },
    {
      image: <ExbImg />,
      type: "excellent-bridge",
      title: "Excellent Bridge Website",
      desc: "Website redesign for ExcellentBridge",
      tags: ["TailwindCSS", "PHP", "Laravel"],
      demoUrl: "https://excellentbridge.com/",
      codeUrl: "",
    },
    {
      image: <LoycyImg />,
      type: "loycy-engineering",
      title: "Loycy Engineering",
      desc: "Website redesign for Loycy Investment Company",
      tags: ["NextJS", "TailwindCSS"],
      demoUrl: "https://loycy-engineering.vercel.app/",
      codeUrl: "",
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
      image: <BlogImg />,
      type: "blog",
      title: "Swiss Blog (Demo)",
      desc: "A personal/corporate blog",
      tags: ["PHP", "HTML", "CSS"],
      demoUrl: "http://mytestwp1.byethost6.com/webcapz-capstone-project/blog",
      codeUrl: "https://github.com/chifarol/webcapz-capstone-project",
    },
    {
      image: <BlogDashboardImg />,
      type: "blog-admin",
      title: "Blog Admin Dashboard",
      desc: "Admin Dashboard for a blog platform",
      tags: ["PHP", "HTML", "CSS"],
      demoUrl: "https://drive.google.com/file/d/1mBZWqKvholqjKiW9r-1pNB4f3yy-i042/view?usp=sharing",
      codeUrl: "https://github.com/chifarol/webcapz-capstone-project",
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
    // {
    //   image: <GalleryImg />,
    //   type: "gallery",
    //   title: "Gallery Page (Demo)",
    //   desc: "Gallery page for a fictional personal portfolio website",
    //   tags: ["HTML", "CSS"],
    //   demoUrl: "https://chifarol.github.io/devChallenges---Responsive-Design-my-gallery-/",
    //   codeUrl: "https://github.com/chifarol/devChallenges---Responsive-Design-my-gallery-",
    // },
    // {
    //   image: <CheckoutImg />,
    //   type: "checkout",
    //   title: "Checkout Page (Demo)",
    //   desc: "Checkout page for a fictional E-Commerce site",
    //   tags: ["HTML", "CSS"],
    //   demoUrl: "https://chifarol.github.io/devChallenges-Responsive-Design-Task-6---Checkout-Page/",
    //   codeUrl: "https://github.com/chifarol/devChallenges-Responsive-Design-Task-6---Checkout-Page",
    // }
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
