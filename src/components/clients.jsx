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

const clientArray = [
  ["Excellent Bridge", "excellent-bridge-logo.webp"],
  ["BluePortal Softwares", "blueportal-software.webp"],
  ["XplicitMode Media", "xplicitmode-icon.webp"],
  ["Mobirevo Inc.", "mobirevo.webp"],
  ["WebCapz", "webcapz-tech-logo.webp"],
];
const Clients = ({ type }) => {
  return (

    <div className="client-container">
      {clientArray.map((client, index) => (
        <div className="client-pill" key={index}>
          <img alt={client[0]} src={client[1]} height="48px" width="auto" style={{ width: 'auto', height: '48px' }} />
          <span className="client-title"></span>
        </div>
      ))}
    </div>
  );
};
export default Clients;
