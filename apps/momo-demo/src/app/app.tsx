import React from "react";
import {Logo} from '@sqli/gui';

import "./app.css";
export const App = () => {
    return (
        <div className="app">
            <Logo size="big"/>
            <Logo size="medium" />
            <Logo size="small" />
        </div>
      );
}
export default App;
