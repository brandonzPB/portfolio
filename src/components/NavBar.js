import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import 'fontsource-roboto';
import MobileModal from './MobileModal';

const NavBar = () => {
  const [modalState, setModalState] = useState({ display: false });

  // SHOW MODAL MENU
  const showMenu = () => {
    if (modalState.display) return;
    setModalState({ display: true });
  }

  // HIDE MODAL MENU
  const hideMenu = () => {
    if (!modalState.display) return;
    setModalState({ display: false });
  }

  return (
    <NavBarContainer>
      <WebContainer>
        <NavItem>PORTFOLIO</NavItem>
        <NavItem>BLOG</NavItem>
        <NavItem>ABOUT ME</NavItem>
        <NavItem>SKILLS</NavItem>
        <NavItem>PROJECTS</NavItem>
        <NavItem>CONTACT</NavItem>
      </WebContainer>

      <MobileContainer>
        <GiHamburgerMenu id="icon" onClick={showMenu} />
        
        <ModalContainer style={{ display: modalState.display ? 'block' : 'none' }}>
          <MobileModal 
            close={hideMenu}
          />
        </ModalContainer>
      </MobileContainer>
    </NavBarContainer>
  )
}

export default NavBar;

const NavBarContainer = styled.div`
  float: right;
  width: 10rem;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const WebContainer = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const NavItem = styled.h1`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  margin: 0 2rem;
`;

const MobileContainer = styled.div`
  float: right;
  position: absolute;
  right: 2rem;

  #icon {
    font-size: 2rem;
  }
  
  @media screen and (min-width: 900px) {
    display: none;

    #icon {
      display: none;
    }
  }
`;

const ModalContainer = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;