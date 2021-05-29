import React, { useState } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './styles/GlobalStyle';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [modalState, setModalState] = useState({ display: false });

  // SHOW MODAL MENU
  const showMenu = () => {
    if (modalState.display) return;

    // hide images

    setModalState({ display: true });
  }

  // HIDE MODAL MENU
  const hideMenu = () => {
    if (!modalState.display) return;

    // show images

    setModalState({ display: false });
  }

  return (
    <>
      <GlobalStyle />

      <NavBar 
        hideMenu={hideMenu}
        modalState={modalState} 
        showMenu={showMenu}
      />

      <main>{
        children.map(child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { key: uuidv4(), modalState });
          }
          return child;
        })
      }</main>

      <Footer theme="light" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;