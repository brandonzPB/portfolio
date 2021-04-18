import React from 'react'
import styled from 'styled-components';
import { HiPuzzle } from 'react-icons/hi';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const TriskeleContainer = () => {
  const data = useStaticQuery(graphql`
    query MyTriskele {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["triskele-black"]}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }      
  `);

  const triskele = {
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    src: data.allFile.edges[0].node.childImageSharp.fluid.src,
    alt: 'Image of a Celtic Triskele: the symbol of growth'
  };

  return (
    <IconContainer>
      <IconLink to="/">
        <HiPuzzle className="icon" style={{ display: 'none' }} />
        <Triskele src={triskele.src} fluid={triskele.fluid} alt={triskele.alt} className="icon" />
      </IconLink>
    </IconContainer>
  )
}

export default TriskeleContainer

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
  height: 3rem;

  .icon {
    color: #fecc27;
    font-size: 2.25rem;
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

  @media screen and (max-width: 500px) {
  }
`

const Triskele = styled(Img)`
  width: 3rem;
  height: auto;
  float: left;
  display: block;
  opacity: 0.3;
`

const IconLink = styled(Link)``