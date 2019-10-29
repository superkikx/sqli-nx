import React from "react";

import "./app.css";
import {AudioPlayer, BreadcrumbSqli, Text} from "@sqli/gui";

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
        <Text>
            {{
                title: "Fishipedia",
                subtitle: "L'encylopédie du monde aquatique",
                href: "https://www.fishipedia.fr/",
                content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
                imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg'
            }}
        </Text>
      <AudioPlayer coverImage={''}/>
    </div>
  );
};

export default App;
