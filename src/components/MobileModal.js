import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { ImCross } from 'react-icons/im';
import 'fontsource-roboto';

const MobileModal = ({ close, ...props }) => {
  return (
    <ModalContainer>
      <CloseButton onClick={close}>
        <ImCross id="icon" />
      </CloseButton>

      <ModalItem>
        <Link to="/">PORTFOLIO</Link>
      </ModalItem>
      <ModalItem>
        <Link to="/learn">BLOG</Link>
      </ModalItem>
      <ModalItem>
        <Link to="/Brandon">ABOUT ME</Link>
      </ModalItem>
      <ModalItem>
        <a href="/#skills">SKILLS</a>
      </ModalItem>
      <ModalItem>
        <a href="/#projects">PROJECTS</a>
      </ModalItem>
      <ModalItem>
        <a href="/#footer">CONTACT</a>
      </ModalItem>
    </ModalContainer>
  )
}

export default MobileModal;

const ModalContainer = styled.div`
  @keyframes slidein {
    from {
      transform: translateX(120rem);
    }

    to {
      transform: translateX(0);
    }
  }

  position: fixed;
  top: 3rem;
  right: 0;
  margin: 0 auto;
  z-index: 10;
  height: 90vh;
  width: 90vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);
  animation: slidein 0.2s ease;
`;

const CloseButton = styled.div`
  text-align: center;
  background: none;
  margin: 4rem auto;
  width: 85%;
  text-align: right;

  #icon {
    font-size: 2.25rem;
  }
`;

const ModalItem = styled.span`
  font-size: 2.5rem;
  font-family: 'Roboto', sans-serif;
  margin: 2.5rem auto;
  text-align: center;
  display: block;
  text-decoration: none;
  font-weight: 600;
  color: black;

  a,
  a:visited,
  a:active {
    color: black;
    text-decoration: none;
  }
`;
