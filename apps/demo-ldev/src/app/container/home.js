import React from "react";

import "../app.css";

import {Button, Logo, MenuSofiane, Footer, Autocomplete, AudioPlayer, Text} from '@sqli/gui'



export const Home = ({store}) => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
React.useEffect(()=>{

  const requestUser = new store.Action(store.ActionTypes.USER_GET_LIST, null);
  const requestTrack = new store.Action(store.ActionTypes.TRACK_SELECT, null);

  store.dispatch(requestUser);
  store.dispatch(requestTrack);

  return ()=> console.log('bye bye');

},[])
    function sayHello() {
    alert('ça fonctionne !');
   
  }
  return (
    <div className="app">
      <Logo size="small"/>  
      
      <MenuSofiane direction ="horizontal">
                {[
                   { label: 'Lien 1', action: 'http://google.fr' },
                   { label: 'Lien 2', action: 'http://google.fr' },
                   { label: 'Lien 3', action: 'http://google.fr' },
                   { label: 'Lien 4', action: 'http://google.fr' }
               ]}
      </MenuSofiane>
      <Button>
                  <a href="https://www.google.fr/" id="generic-btn-premium" role="button" data-tracking="{&quot;category&quot;: &quot;home (offer)&quot;, &quot;action&quot;: &quot;premium&quot;}" className="btn btn-green btn-simplified js-goto-signup js-button-hero-get-free">
            Mon Button 
                   </a>
      </Button>
          <button onClick={sayHello} >Mybutton</button>
    
      <Autocomplete />
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
      <AudioPlayer/>
     
      <Footer/>
      
    </div>
  );
};

export default Home;
