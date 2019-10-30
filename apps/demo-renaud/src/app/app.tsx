import React from 'react';

import Home from './container/home';

/* 
import { Action, ActionTypes, dispatch } from './services/facade';
const Store = { Action, ActionTypes, dispatch }; 
*/

import * as Store from './services/facade';

export class App extends React.Component {
  
  constructor(props) {
    super(props);
    console.warn(1, 'App');
  }

  //useEffect
  componentDidMount() {
    
    console.warn(2, 'App');

    const action = new Store.Action( Store.ActionTypes.USER_GET_LIST, null );
    Store.dispatch(action);

  }

  componentDidUpdate() {
    console.warn(3, 'App');
  }

  componentWillUnmount() {
    console.warn(4, 'App');
  }

  render() {
    return (
      <>
        <Home store={Store}/>
      </>
    );
  }
}

export default App;
