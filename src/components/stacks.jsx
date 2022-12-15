import React from "react";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  NodeJsIcon,
  ReactIcon,
  PHPIcon,
  WPIcon,
  DjangoIcon,
} from "./svgs";

const stackArray = [
  "HTML",
  "CSS",
  "Javascript",
  "NodeJS",
  "ReactJS",
  "PHP",
  "Wordpress",
  "Django",
];
const Stack = ({ type }) => {
  return (
    <div className="section stack-section">
      <div></div>
      <div className="stack-pill">
        {type == "HTML" ? (
          <HTMLIcon />
        ) : type == "CSS" ? (
          <CSSIcon />
        ) : type == "Javascript" ? (
          <JSIcon />
        ) : type == "NodeJS" ? (
          <NodeJsIcon />
        ) : type == "ReactJS" ? (
          <ReactIcon />
        ) : type == "PHP" ? (
          <PHPIcon />
        ) : type == "Wordpress" ? (
          <WPIcon />
        ) : (
          <DjangoIcon />
        )}
      </div>
      <span className="stack-title">{type}</span>
    </div>
  );
};

const Stacks = ({ type }) => stackArray.map((stack) => <Stack type={stack} />);
export default Stacks;
