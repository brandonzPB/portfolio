import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';
import 'fontsource-roboto';
import MobileModal from './MobileModal';

const NavBar = ({ hideModal, modalDisplay, showModal }) => {
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
        <GiHamburgerMenu id="icon" onClick={showModal} />
        
        <ModalContainer 
          style={{ 
            display: modalDisplay ? 'block' : 'none' 
          }}
        >
          <MobileModal 
            close={hideModal}
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
  position: fixed;
  right: 2rem;
  top: 6rem;

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
  @keyframes slideout {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(120rem);
    }
  }

  .hide-modal {
    animation: slideout 0.2s ease;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;