import React from 'react';
import styled from 'styled-components';
import { GiBrain } from 'react-icons/gi';
import { Link } from 'gatsby';

import 'fontsource-open-sans';

const BrainContainer = () => {
  return (
    <Brain__Container>
      <BrainLink to="/learn">
        <GiBrain id="icon" />
        <BrainCaption>Blog</BrainCaption>
      </BrainLink>
    </Brain__Container>
  )
}

export default BrainContainer;

const Brain__Container = styled.div`
  width: 100%;
  height: auto;
  float: right;
  text-align: right;
  background: none;

  #icon {
    font-size: 2.5rem;
    color: black;
    background: none;
    border: none;
    opacity: 0.4;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  #icon:hover {
    transform: scale(1.05);
  }

  #icon:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    #icon {
      font-size: 3.5rem;
    }
  }
`;

const BrainLink = styled(Link)`
  text-decoration: none;
`;

const BrainCaption = styled.h1`
  font-size: 1rem;
  opacity: 0.5;
  color: black;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`;
