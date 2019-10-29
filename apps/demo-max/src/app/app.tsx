import React from "react";

import "./app.css";
import {AudioPlayer, BreadcrumbSqli} from "@sqli/gui";

const data = [
    {
        action:'http://www.rorymcilroy.com/',
        label:'Rory Mcilroy'
    },
    {
        action:'https://twitter.com/kikxmachine',
        label:'Superkikx'
    },
    {
        action:'https://tigerwoods.com/',
        label:'Tiger Woods'
    }
    ];


export const App = () => {
  return (
    <div className="app">
      <BreadcrumbSqli trail={data}/>
      <AudioPlayer coverImage={''}/>
    </div>
  );
};

export default App;
