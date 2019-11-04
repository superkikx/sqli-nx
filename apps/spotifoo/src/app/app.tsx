import React from 'react';
import Home from './container/home';
import * as Store from './services/facade';

export class App extends React.Component {

    constructor(props) {
        super(props);
        console.warn(1, 'app')
    }

    componentDidMount() {
        console.warn(2, 'app')

        const action = new Store.Action(Store.ActionTypes.USER_GET_LIST, null);
        Store.dispatch(action);
    }
    componentDidUpdate() {
        console.warn(3, 'app')
    }
    componentWillUnmount() {
        console.warn(4, 'app')
    }

    render() {
        return (
            <Home store={Store}/>
        );
    }
}

export default App;
