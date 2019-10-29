import React from "react";

import "./app.css";
import  {AudioPlayer, Autocomplete, BreadcrumbSqli, Logo, MenuSofiane} from "@sqli/gui";



export const App = () => {
  return (
    <div className="app">
        <header>
            <Logo size="medium" />
            <MenuSofiane background={true} direction="horizontal" >
                {[
                    { label: 'Lien 1', action: 'http://google.fr' },
                    { label: 'Lien 2', action: 'http://google.fr' },
                    { label: 'Lien 3', action: 'http://google.fr' },
                    { label: 'Lien 4', action: 'http://google.fr' }
                ]}
            </MenuSofiane>
        </header>
        <main>
            <div>
                <AudioPlayer/>
            </div>
            <div>
                <BreadcrumbSqli/>
                <Autocomplete />
            </div>
        </main>
    </div>
  );
};

export default App;
