import React from "react";

const SectionDivider = ({ title, desc }) => {
  return (
    <div className="section-divider">
      <p className="section-divider-title">{title}</p>
      <p className="section-divider-desc">{desc}</p>
    </div>
  );
};

export default SectionDivider;
