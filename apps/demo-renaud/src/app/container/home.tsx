import React from 'react';

import {
    Logo,
    MenuSofiane,
    Footer,
    AudioPlayer,
    BreadcrumbSqli,
    Autocomplete,
    Text,
    Button
  } from '@sqli/gui';
  
  import '../app.css';
  
  export const Home = ({store}) => {

    const [loaded, setLoaded] = React.useState(false);
    const [trail, setTrail] = React.useState([]);
    const [tracks, setTracks] = React.useState([]);
    const [users, setUsers] = React.useState([]);


    // Acces fonctionnel au LifeCycle
    React.useEffect( () => {

      const requestUser = new store.Action(store.ActionTypes.USER_GET_LIST, null);
      const requestTrack = new store.Action(store.ActionTypes.TRACK_GET_LIST, null);

      store.dispatch(requestUser).then( data => { 
        console.table(data)
        return data;
      }).then( setUsers )

      store.dispatch(requestTrack).then( data => {
        console.table(data)
        return data
      } ).then( setTracks )

      //cleanup a faire sur le unmount
      return ()=> console.log('Bye bye');

    },[loaded]);

    // Navigation Verticale
    const navigate = data => {
      console.log(data);
    };
    const routes = [
      { label: 'Home', action: navigate },
      { label: 'Search', action: navigate },
      { label: 'Login', action: navigate }
    ];

    const trackCardHandler = data => {
      console.log('fromCard',data);
    };

    const mapTrackToTExt = track => ({
      title: track.name,
      content: `
      Name : ${track.name}
      Album : ${track.album.name}
      Duration: ${track.duration} seconds.
      `,
      imageSrc: track.album.image,
      href:trackCardHandler,
      ctaTitle:<Button>'Listen'</Button>,
      reversed:false
    });


    return (
      <div className="app col">
  
        <div className="col">
          <Logo />
          <MenuSofiane background="true">{[]}</MenuSofiane>

          <MenuSofiane>{ routes }</MenuSofiane>

          <MenuSofiane background="true">{[]}</MenuSofiane>
        </div>
  
        <div className="row">
  
          <div className="col pad">
            <AudioPlayer />
  
            <MenuSofiane direction="vertical">
              { users.map( users => ({label:users.name})) }
            </MenuSofiane>
          </div>
  
          <div className="col">
            <BreadcrumbSqli
              trail={trail}
            ></BreadcrumbSqli>
            <div className="pad">
              <Autocomplete
                placeholder="Type Your Favorite Music Name"
                data={['Test']}
              />
            </div>
            <div className="pad wrap slide">
              {
                tracks.map( (track,num) => <div className="pad" key={num}><Text>{mapTrackToTExt(track)}</Text></div>)
              }
            </div>
          </div>
        </div>
  
        <Footer background="crimson">
          <h1>
            Welcome to <Logo size="small" />
          </h1>
        </Footer>
      </div>
    );
  };
  
  export default Home;