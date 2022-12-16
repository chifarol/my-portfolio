import { useState } from "react";
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import SectionDivider from "./components/section-divider";
import ServiceCards from "./components/service";
import ProjectCards from "./components/projects";
import Stacks from "./components/stacks";
import Footer from "./components/footer";
import "./App.scss";
import "@fontsource/saira-semi-condensed/400.css";
import "@fontsource/saira-semi-condensed/600.css";
import "@fontsource/saira/600.css";
import ModeContext from "./components/contexts";
import { useContext } from "react";

function App() {
  const { mode } = useContext(ModeContext);

  return (
    <div className={`app ${mode ? "light-mode" : "dark-mode"}`}>
      <Header />
      <div className="main">
        {/* hero section */}
        <Hero />
        {/* services */}
        <div className="section service-section">
          <SectionDivider title="Services" desc="Various services I offer" />
          <div className="service-card-container">
            <ServiceCards />
          </div>
        </div>
        {/* projects */}
        <div className="section project-section">
          <SectionDivider
            title="Projects"
            desc="Some of the projects I’ve worked on"
          />
          <div className="project-card-container">
            <ProjectCards />
          </div>
        </div>
        {/* tech stacks */}
        <div className="section stack-section">
          <SectionDivider
            title="Tech Stacks"
            desc="Tools, Frameworks and Languages I work with"
          />
          <Stacks />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
