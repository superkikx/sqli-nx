import React from "react";

import "./button.css";

/* eslint-disable-next-line */
export interface ButtonProps {}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button>Welcome to button component!</button>
    </div>
  );
};

export default Button;
