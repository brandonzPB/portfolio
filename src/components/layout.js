import React, { useState } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from './styles/GlobalStyle';
import { v4 as uuidv4 } from 'uuid';

import { NavContext } from '../contexts/navContext';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  // const [modalState, setModalState] = useState({ display: false });

  // // SHOW MODAL MENU
  // const showMenu = () => {
  //   if (modalState.display) return;

  //   setModalState({ display: true });
  // }

  // // HIDE MODAL MENU
  // const hideMenu = () => {
  //   if (!modalState.display) return;

  //   setModalState({ display: false });
  // }

  return (
    <NavContext.Consumer>
      {
        context => (
          <>
            <GlobalStyle />

            <NavBar 
              modalDisplay={context.display}
              hideModal={context.hideModal}
              showModal={context.showModal}
            />

            <main>
              {
                children.map(child => {
                  if (React.isValidElement(child)) {
                    return React.cloneElement(
                      child, 
                      { 
                        key: uuidv4(), 
                        modalDisplay: context.display 
                      }
                    );
                  }
                  return child;
                })
              }
            </main>

            <Footer theme={'light'} />
          </>
        )
      }
      {/* <GlobalStyle />

      <NavBar 
        hideMenu={hideMenu}
        modalState={modalState} 
        showMenu={showMenu}
      />

      

      <Footer theme="light" /> */}
    </NavContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;