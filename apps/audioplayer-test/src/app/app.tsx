import React from "react";

import "./app.css";
import {AudioPlayer} from "@sqli/gui";

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <AudioPlayer coverImage={ 'https://i.scdn.co/image/ab67616d0000b273f9d64ac5b0e042252e3a561a' }/>
    </div>
  );
};

export default App;
