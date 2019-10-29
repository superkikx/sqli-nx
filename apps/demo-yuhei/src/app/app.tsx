import React from "react";

import "./app.css";
import {Text} from '@sqli/gui'

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   * 
   *  <Text>
        {{
          title: "Fishipedia",
          subtitle: "L'encylopédie du monde aquatique",
          href: "https://www.fishipedia.fr/",
          content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
          imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg'
        }}
      </Text>
   * 
   */
  return (
    <div className="app">
      <Text>
        {{
          title: "Fishipedia",
          subtitle: "L'encylopédie du monde aquatique",
          href: "https://www.fishipedia.fr/",
          content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
          imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg'
        }}
      </Text>
      <Text>
        {{
          subtitle: "L'encylopédie du monde aquatique",
          href: "https://www.fishipedia.fr/",
          content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”'
        }}
      </Text>
    </div>
  );
};


export default App;
