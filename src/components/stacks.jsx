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
      <span className="stack-title">{type}</span>
    </div>
  );
};

const Stacks = () => (
  <div className="stacks-container">
    {stackArray.map((stack) => (
      <Stack type={stack} key={stack} />
    ))}
  </div>
);
export default Stacks;
