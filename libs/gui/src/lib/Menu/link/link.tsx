import React from "react";
import "./link.css";

export const Link = props => {

  return (
    <a href={props.action} className="navigation-link">
      {props.label}
    </a>
  )
};

export default Link;
