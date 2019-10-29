import React from "react";
import { MenuSofiane } from '@sqli/gui'

import "./app.css";

export const App = () => {
  return (
    <div>
      <MenuSofiane background={true} direction="vertical" >
        {[
          { label: 'Lien 1', action: 'http://google.fr' },
          { label: 'Lien 2', action: 'http://google.fr' },
          { label: 'Lien 3', action: 'http://google.fr' },
          { label: 'Lien 4', action: 'http://google.fr' }
        ]}
      </MenuSofiane>
      <MenuSofiane background={true} direction="vertical" >
        {[
          { label: 'Lien 1', action: 'http://google.fr' },
          { label: 'Lien 2', action: 'http://google.fr' },
          { label: 'Lien 3', action: 'http://google.fr' },
          { label: 'Lien 4', action: 'http://google.fr' }
        ]}
      </MenuSofiane>
    </div>
  );
};

export default App;
