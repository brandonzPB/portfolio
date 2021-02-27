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
  @keyframes spin {
    25% {
      transform: scale(1.025) rotate(90deg);
    }

    50% {
      transform: scale(1.05) rotate(180deg);
    }

    75% {
      transform: scale(1.075) rotate(270deg);
    }

    100% {
      transform: scale(1.1) rotate(360deg);
    }
  }

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
    transition: animation 1.5s;
    transition-timing-function: ease-in-out;
  }

  .icon:hover {
    animation: spin 0.2s ease-out;
  }

  .icon:active {
    transform: scale(0.8);
  }
`

const IconLink = styled(Link)``