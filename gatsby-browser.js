import React from 'react';

import NavContextProvider from './src/contexts/navContext';

export const wrapRootElement = ({ element }) => {
  <NavContextProvider>
    {element}
  </NavContextProvider>
}
