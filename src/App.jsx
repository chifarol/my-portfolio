import { useState } from "react";
import React from "react";
import Header from "./components/header";
import SectionDivider from "./components/section-divider";
import ServiceCards from "./components/service";
import ProjectCards from "./components/projects";
import Stacks from "./components/stacks";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="main">
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
          <div className="project-card-container">
            <Stacks />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
