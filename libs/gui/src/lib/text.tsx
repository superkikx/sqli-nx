import React from "react";

import "./text.css";

/* eslint-disable-next-line */
export interface TextProps {}

export const Text = (props: TextProps) => {
  return (
    <div>
      <h1>Welcome to text component!</h1>
    </div>
  );
};

export default Text;
