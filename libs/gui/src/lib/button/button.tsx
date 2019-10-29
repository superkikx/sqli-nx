import React from "react";

import "./button.css";
import propTypes from '../button/button.props';

export const Button = (props) => {

  const text = props.children;
  
  return (
      <button>
        {text}
      </button>
  );
};
Button.propTypes = propTypes;
export default Button;
