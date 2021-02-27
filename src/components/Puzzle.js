import React from 'react'
import styled from 'styled-components';
import { HiPuzzle } from 'react-icons/hi';
import { Link } from 'gatsby';

const Puzzle = () => {
  return (
    <IconContainer>
      <IconLink to="/">
        <HiPuzzle className="icon" />
      </IconLink>
    </IconContainer>
  )
}

export default Puzzle

const IconContainer = styled.div`
  margin: 0 auto;
  display: block;
  text-align: left;

  .icon {
    color: #fecc27;
    font-size: 3rem;
    margin: 0 auto;
    z-index: 3;
    background: none;
    border: none;
    transition: transform 0.3s;
  }

  .icon:hover {
    transform: scale(1.1);
  }
`

const IconLink = styled(Link)``