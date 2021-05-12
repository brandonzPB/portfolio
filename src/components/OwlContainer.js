import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GiOwl } from 'react-icons/gi';

const OwlContainer = () => {
  return (
    <Owl__Container>
      <Link to="/learn">
        <GiOwl className="icon" />
      </Link>
    </Owl__Container>
  )
}

export default OwlContainer;

const Owl__Container = styled.div`
  width: 100%;
  float: right;
  position: relative;
  top: -3rem;
  text-align: right;
  background: none;

  .icon {
    font-size: 3rem;
    color: black;
    background: none;
    border: none;
    opacity: 0.4;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .icon:hover {
    transform: scale(1.05);
  }

  .icon:active {
    transform: scale(0.95);
  }
`;