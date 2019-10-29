import React from "react";

import "./app.css";
import {BreadcrumbSqli} from "@sqli/gui";

const data = [
    {
        action:'https://www.google.fr',
        label:'Menu 1'
    },
    {
        action:'https://www.google.fr',
        label:'Menu 2'
    }
    ];

export const App = () => {
  return (
    <div className="app">
      <BreadcrumbSqli trail={data}/>
    </div>
  );
};

export default App;
