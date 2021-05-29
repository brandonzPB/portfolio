import React, { useState, createContext } from 'react';

const initialState = {
  display: true,
  showModal: () => {},
  hideModal: () => {},
};

export const NavContext = createContext(initialState);

const NavContextProvider = (props) => {
  const [state, setState] = useState({ display: true });

  const showModal = () => {
    if (state.display) return;

    setState({ dipslay: true });
  }

  const hideModal = () => {
    if (!state.display) return;

    setState({ display: false });
  }

  return (
    <NavContext.Provider
      value={{
        state,
        showModal,
        hideModal
      }}
    >
      {props.children}
    </NavContext.Provider>
  )
}

export default NavContextProvider;
