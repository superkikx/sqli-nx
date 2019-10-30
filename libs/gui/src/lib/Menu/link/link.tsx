import React from "react";
import "./link.css";

export const Link = props => {


  return (
    <>
    {
      (typeof props.action==='string')
      ?
      <a href={props.action} className="navigation-link">{props.label}</a>
      :
      <a onClick={ ()=> props.action(props)} className="navigation-link">{props.label}</a>
    }
     </>

  )
};

export default Link;
