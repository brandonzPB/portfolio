import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NavBar from './NavBar';

const NavLayout = ({ children }) => {
  const [modalState, setModalState] = useState({ display: false });

  // SHOW MODAL MENU
  const showModal = () => {
    if (modalState.display) return;

    setModalState({ display: true });
  }

  // HIDE MODAL MENU
  const hideModal = () => {
    if (!modalState.display) return;

    setModalState({ display: false });
  }

  return (
    <>
      <NavBar 
        hideModal={hideModal}
        modalState={modalState}
        showModal={showModal}
      />

      <main>
        {
          children.props.children.map(child => {
            return React.cloneElement(
              child,
              {
                key: uuidv4(),
                modalState
              }
            )
          })
        }
      </main>
    </>
  )
}

export default NavLayout;
