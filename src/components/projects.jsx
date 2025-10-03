/** @format */

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
      <div className="project-card-image">{image}</div>
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
      <div className="project-card-links type6" style={{ marginTop: "auto" }}>
        <a href={demoUrl} target="_blank">
          Demo
        </a>
        {codeUrl && (
          <a href={codeUrl} target="_blank">
            &#60;Code&#47;&#62;
          </a>
        )}
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
  MichfrancyImg,
  ModuverseImg,
  ProviderImg,
  EventscoutaImg,
} from "./images";
export const projects = [
  {
    image: <EventscoutaImg />,
    type: "EventscoutaImg",
    title: "EventScouta",
    desc: "Design & Development of a platform to find, publish events and sell tickets",
    tags: ["NextJS", "Laravel", "Tailwindcss"],
    demoUrl: "https://eventscouta.com/",
    codeUrl: "",
  },
  {
    image: <ModuverseImg />,
    type: "ModuverseImg",
    title: "Web3 Blog & Community",
    desc: "Development of a custom SEO optimized blog for Moduverse - a web3 community",
    tags: ["NextJS", "Laravel", "Tailwindcss"],
    demoUrl: "https://moduverse.co/",
    codeUrl: "",
  },
  {
    image: <ProviderImg />,
    type: "ProviderImg",
    title: "Bills payment App",
    desc: "Design & Development of a mobile app for online bills payment, virtual dollar card services and more",
    tags: ["React-Native", "Laravel", "Tailwindcss"],
    demoUrl: "https://provider.ng/",
    codeUrl: "",
  },
  {
    image: <MichfrancyImg />,
    type: "PropfirmImg",
    title: "E-commerce Store",
    desc: "Design & Development of an online e-commerce store for beauty products",
    tags: ["NextJS", "Laravel", "Tailwindcss"],
    demoUrl: "https://michyandfrancy.com/",
    codeUrl: "",
  },
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
  // {
  //   image: <GoodChoirImg />,
  //   type: "GoodChoirImg",
  //   title: "GoodChoir Official Website",
  //   desc: "Design & Development of the official website for the GoodChoir + Admin Dashboard",
  //   tags: ["TailwindCSS", "PHP"],
  //   demoUrl: "https://goodchoir.com/",
  //   codeUrl: "",
  // },
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
    image: <SimplePlaylistImg />,
    type: "simple",
    title: "Simple Playlist (Plugin)",
    desc: "A WordPress playlist plugin with color customizations",
    tags: ["PHP", "Wordpress"],
    demoUrl: "https://github.com/chifarol/WP-Simple-Playlist",
    codeUrl: "https://github.com/chifarol/WP-Simple-Playlist",
  },
];
export const ProjectCards = () => {
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
