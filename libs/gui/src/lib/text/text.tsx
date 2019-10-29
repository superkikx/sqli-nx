import React from "react";

import "./text.css";

export const Text = (props) => {
  return (
    /*<a className="text-component" href={props.children.href}>
      {props.children.title && <h1>{props.children.title}</h1>}
      {props.children.subtitle && <h2>{props.children.subtitle}</h2>}
      {props.children.content && <p>{props.children.content}</p>}
      {props.children.imageSrc && <img src={props.children.imageSrc} />}
    </a>*/
    <div className="card 1 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card_image"> 
            {props.children.imageSrc && <img src={props.children.imageSrc} />}
            {!props.children.imageSrc && <img src="https://i.redd.it/b3esnz5ra34y.jpg" />}
          </div>
          <div className="card_title title-white">
            {props.children.title && <p>{props.children.title}</p>}
          </div>
        </div>
        <div className="flip-card-back">
            {props.children.content && <p>{props.children.content}</p>}
        </div>
      </div>
    </div>

    /*
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    */
  );
};

export default Text;
