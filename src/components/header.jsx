import React from "react";
import { LightModeIcon, DarkModeIcon } from "./svgs";

const Header = () => {
  return (
    <header className="header">
      <h3>
        <PORTFOLIO />
      </h3>
      <div className="header-right">
        <LightModeIcon />
        <DarkModeIcon />
      </div>
    </header>
  );
};

export default Header;
