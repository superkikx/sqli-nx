import React from 'react';

import Home from './container/home';


export class App extends React.Component{
  
  constructor(props){
    super(props);
    console.warn(1,'App');
  }


  //useEffect
  componentDidMount(){
    console.warn(2,'App');
  }

  componentDidUpdate(){
    console.warn(3,'App');
  }

  componentWillUnmount(){
    console.warn(4,'App');
  }

  render(){
    return (
      <>
        <Home/>
      </>
    );
  }
} 

export default App;
