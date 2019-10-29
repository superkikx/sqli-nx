import React from "react";

import "./button.css";
import propTypes from '../button/button.props';

export const Button = (props) => {

  const propsTypes = props.children;
  
  return (
      <button>
        {propsTypes}
      </button>
  );
};
Button.propTypes = propTypes;
export default Button;
