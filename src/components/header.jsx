import React from "react";
import { LightModeIcon, DarkModeIcon } from "./svgs";

const Header = () => {
  return (
    <header className="header">
      <h3>&#60;PORTFOLIO&#47;&#62;</h3>
      <div className="header-right">
        <LightModeIcon />
        <DarkModeIcon />
      </div>
    </header>
  );
};

export default Header;
