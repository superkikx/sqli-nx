import React from "react";

import {Autocomplete} from '@sqli/gui';

import "./app.css";

export const App = () => {

const data = ['France','Morocco', 'usa', 'Canada'];
  return (
    <div className="app">
      <Autocomplete data={data} placeholder="e.g. Denmark"/>
    </div>
  );
};

export default App;
