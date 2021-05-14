import React from 'react';
import styled from 'styled-components';
import { GiBrain } from 'react-icons/gi';
import { Link } from 'gatsby';

const BrainContainer = () => {
  return (
    <Brain__Container>
      <Link to="/learn">
        <GiBrain id="icon" />
      </Link>
    </Brain__Container>
  )
}

export default BrainContainer;

const Brain__Container = styled.div`
  width: 100%;
  float: right;
  position: relative;
  top: -3rem;
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
`;
