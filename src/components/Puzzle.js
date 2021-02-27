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
    12.5% {
      transform: scale(1.0125) rotate()
    }

    25% {
      transform: scale(1.025) rotate(90deg);
    }

    37.5% {}

    50% {
      transform: scale(1.05) rotate(180deg);
    }

    62.5% {}

    75% {
      transform: scale(1.075) rotate(270deg);
    }

    87.5% {}

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
    transition: animation 0.3s;
  }

  .icon:hover {
    animation: spin 0.2s ease-out;
  }
`

const IconLink = styled(Link)``