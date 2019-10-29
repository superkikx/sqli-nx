import React from "react";
import {Link} from './link/link'
import "./menu-sofiane.css";

export const MenuSofiane = props => {

  const background = props.background  ? 'background' : 'background-none' ;
  const direction = (props.direction == 'vertical') ? 'menu-vertical' : 'menu-horizontal';

  return ( 
    <div className= {`menu ${background} ${direction}`}>
      { props.children.map( (link,num) =>  <Link {...link} key={num}/>) }
    </div>
  )
};
MenuSofiane.defaultProps = {
  isBackground:false,
  isVertical:false
}
export default MenuSofiane;
