import React from "react";

import {Autocomplete} from '@sqli/gui';
import {Logo} from '@sqli/gui';
import {MenuSofiane} from '@sqli/gui';
import {AudioPlayer} from '@sqli/gui';
import {Text} from '@sqli/gui'
import {BreadcrumbSqli} from '@sqli/gui'
import { Footer } from "@sqli/gui";

import "../app.css";


//les dada
const data = ['France','Morocco', 'usa', 'Canada'];
const data2 = [
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
        },
        {
          action:()=>alert(123),
          label:'Tiger Woods 2'
      }
    ];

export const Home = ({store}) => {

React.useEffect( ()  => {

    const requestUser =  new store.Action(store.ActionTypes.USER_GET_LIST,null);
    const requestTrack =  new store.Action(store.ActionTypes.TRACK_GET_LIST,null);

//show les data
    store.dispatch(requestUser).then(users => console.table(users));
    store.dispatch(requestTrack).then(tracks => console.table(tracks));

    return ()=> console.log('bye bye');
},[]);

//Navigation
const navigate = data => {
    console.log(data);
}


const getNamePicture = data => {
    console.log(data);
}

 const routes = [
              { label: 'Accueil', action: navigate },
              { label: 'Produits', action: navigate },
              { label: 'Catalogues', action: navigate },
              { label: 'contactez nous', action: navigate }
            ]

  return (
<>
<div>
          <Logo size="medium" />

          <MenuSofiane background={true} direction="horizontal" >
            {routes}
          </MenuSofiane>
    </div>

    <div>
        <div>
                  <AudioPlayer />
                  <MenuSofiane background={true} direction="vertical" >
                    {[
                      { label: 'Khalil', action: 'http://google.fr' },
                      { label: 'David', action: 'http://google.fr' },
                      { label: 'Momo', action: 'http://google.fr' },
                      { label: 'Max', action: 'http://google.fr' }
                    ]}
                  </MenuSofiane>
        </div>

        <div>
            <BreadcrumbSqli trail={data2}/>

            <Autocomplete data={data} placeholder="e.g. Denmark"/>

                   <Text>
                     {{
                       title: "Fishipedia",
                       subtitle: "L'encylopédie du monde aquatique",
                       href: getNamePicture,
                       ctaTitle: "visiter le site",
                       content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
                       imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg',
                       reversed: false
                     }}
                   </Text>
                   <Text>
                     {{
                       subtitle: "L'encylopédie du monde aquatique",
                       href: "https://www.fishipedia.fr/",
                       content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”'
                     }}
                   </Text>
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
                     <Text>
                       {{
                         subtitle: "L'encylopédie du monde aquatique",
                         href: "https://www.fishipedia.fr/",
                         content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”'
                       }}
                     </Text>
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
                       <Text>
                         {{
                           subtitle: "L'encylopédie du monde aquatique",
                           href: "https://www.fishipedia.fr/",
                           content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”'
                         }}
                       </Text>
        </div>
    </div>
    <div>
     <Footer background="gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus reprehenderit, autem voluptas, id quia culpa quo adipisci, enim ut assumenda libero ratione perspiciatis eum praesentium nesciunt dolorum laudantium similique.</Footer>
     <Footer  background="crimson">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloremque impedit commodi nemo veritatis ducimus illo dicta minima quas. At amet voluptatibus earum molestiae, tempora corporis quidem ea natus perspiciatis.</Footer>

    </div>
</>
);
};

export default Home;