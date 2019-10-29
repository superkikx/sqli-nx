import React from "react";

import "./menu-sofiane.css";

const MenuSofiane = props => {
  const isBackground = props.isBackground;
  const direction = props.direction;
  return ( 
    <div className={isBackground ? 'background' : 'background-none'} />
  )
};

export default MenuSofiane;
