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
  ["","excellent-bridge-logo.png"],
  ["","loycy-logo.png"],
  ["","mobirevo.png"],
  ["","WebCapz-Tech-Logo.png"],
];
const Clients = ({ type }) => {
  return (
    
    <div className="client-container">
      {clientArray.map((client,index)=>(
    <div className="client-pill" key={index}>
        <img src={client[1]} height="48px" width="auto" style={{width:'auto',height:'48px'}} />
      <span className="client-title">{client[0]}</span>
    </div>
      ))}
    </div>
  );
};
export default Clients;
