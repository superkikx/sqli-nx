import React from "react";

import "./button.css";

export const Button = (props) => {

  const propsTypes = props.children;
  
  return (
      <button>
        {propsTypes}
      </button>
  );
};
//Button.PropTypes = propTypes;
export default Button;
