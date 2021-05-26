import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
        <NavItem>
          <NavLink to="/">PORTFOLIO</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/learn">BLOG</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Brandon">ABOUT ME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#skills">SKILLS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#projects">PROJECTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#footer">CONTACT</NavLink>
        </NavItem>
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
  width: 8rem;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0.5rem;

  @media screen and (max-width: 500px) {
    width: 10rem;
    position: absolute;
  }
`;

const WebContainer = styled.div`
  border-right: 1px solid black;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin: 1rem 2rem;
  text-decoration: none;
  display: block;
`;

const NavLink = styled(Link)`
  color: black;
  opacity: 0.5;
  transition: border-bottom 0.3s ease 0s;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;

  &:visited, {
    color: #0070b7;
  }

  &:active, &:focus {
    color: black;
    opacity: 1;
  }

  &:hover {
    color: #48CEF7;
    border-bottom: 2px solid #48cef7; 
  }
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