import React from "react";

import "./app.css";
import {Button} from '@sqli/gui'

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <Button type="button">Large button</Button>
      <Button color="gray">Sample Text</Button>
      <Button color="orage">Sample Text</Button>
      <Button>Sample Text</Button>
    </div>
  );
};

export default App;
