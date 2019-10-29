import React from "react";

import "./menu-sofiane.css";

export const MenuSofiane = props => {
  const isBackground = props.isBackground  ? 'background' : 'background-none' ;
  const isVertical = props.isVertical ? 'menu-vertical' : 'menu-horizontal';
  return ( 
    <div className= {`${isBackground} ${isVertical}`}>
      
      </div>
  )
};
MenuSofiane.defaultProps = {
  isBackground:false,
  isVertical:false
}
export default MenuSofiane;
