import React from "react";

import "./logo.css";
import { LogoImage } from './logo-image';
import  PropTypes  from 'prop-types';



export const Logo = (props) => {
  return (
    <div className={ "logo " + props.size}>
     <LogoImage /> 
     <h1>SpotiFoo</h1>
    </div>
  );
};

Logo.propTypes = {
  size:PropTypes.oneOf(['big','medium','small'])
}

export default Logo;
