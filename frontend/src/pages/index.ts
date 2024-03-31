export const code1 = `import React, { createContext, useState, useEffect } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch('https://klrplate.sourabhsharma181003.workers.dev/project/7');
        const data = await response.json();
        setColors(data);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    };

    fetchColors();
  }, []);

  return (
    <ColorContext.Provider value={colors}>
      {children}
    </ColorContext.Provider>
  );
};

`





export const code2 = `import React from 'react';
import { ColorProvider } from './ColorContext';
import YourComponent from './YourComponent';

const App = () => {
  return (
    <ColorProvider>
      <YourComponent />
    </ColorProvider>
  );
};

export default App;


`

export const code3 =`

import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

const YourComponent = () => {
  const colors = useContext(ColorContext);

  // Render your component using the colors context
};

export default YourComponent;

`

export type codePropType={
    language :string,
    code:string,
    step:string
}