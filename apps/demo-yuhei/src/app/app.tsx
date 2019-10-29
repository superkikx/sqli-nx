import React from "react";

import "./app.css";
import {Text} from '@sqli/gui'
import {AudioPlayer} from '@sqli/gui'
import {BreadcrumbSqli} from '@sqli/gui'
import {MenuSofiane} from '@sqli/gui'
import {Logo} from '@sqli/gui'
import {Button} from '@sqli/gui'
import {Footer} from '@sqli/gui'
import {Autocomplete} from '@sqli/gui'

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   * 
   */

  const data = ['France','Morocco', 'usa', 'Canada'];
  const menu = [
    { label: 'Lien 1', action: 'http://google.fr' },
    { label: 'Lien 2', action: 'http://google.fr' },
    { label: 'Lien 3', action: 'http://google.fr' },
    { label: 'Lien 4', action: 'http://google.fr' }
  ];
  const trail = [
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

  return (
    <div className="app">
      <Logo size="small"/>
      <MenuSofiane>{menu}</MenuSofiane>
      <BreadcrumbSqli>{trail}</BreadcrumbSqli>
      <AudioPlayer coverImage="https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg"/>
      <Autocomplete data={data} placeholder="e.g. Denmark"/>
      <Button>Lancer la recherche</Button>
      <Text>
        {{
          title: "Fishipedia",
          subtitle: "L'encylopédie du monde aquatique",
          href: "https://www.fishipedia.fr/",
          ctaTitle: "visiter le site",
          content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
          imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg',
          reversed: false
        }}
      </Text>
      <Footer background="gray"></Footer>
      </div>
  );
};


export default App;
