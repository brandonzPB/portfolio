import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GiTriforce } from 'react-icons/gi';

import 'fontsource-open-sans'

const TriforceContainer = () => {
  // const data = useStaticQuery(graphql`
  //   query MyTriskele {
  //     allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["triskele-black"]}}) {
  //       edges {
  //         node {
  //           childImageSharp {
  //             fluid(maxHeight: 400, quality: 90) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }      
  // `);

  // const triskele = {
  //   fluid: data.allFile.edges[0].node.childImageSharp.fluid,
  //   src: data.allFile.edges[0].node.childImageSharp.fluid.src,
  //   alt: 'Image of a Celtic Triskele: the symbol of growth'
  // };

  return (
    <IconContainer>
      <IconLink to="/">
        {/* <Triskele src={triskele.src} fluid={triskele.fluid} alt={triskele.alt} className="icon" /> */}
        <GiTriforce className="icon" />
        <TriforceCaption>Blog</TriforceCaption>
      </IconLink>
    </IconContainer>
  )
}

export default TriforceContainer

const IconContainer = styled.div`
  @keyframes spin {
    25% {
      transform: scale(1.0125) rotate(90deg);
    }

    50% {
      transform: scale(1.025) rotate(180deg);
    }

    75% {
      transform: scale(1.0375) rotate(270deg);
    }

    100% {
      transform: scale(1.05) rotate(360deg);
    }
  }

  @keyframes flip {
    25% {
      transform: scaleX(-1);
    }

    50% {
      transform: scaleX(0);
    }

    75% {
      transform: scaleX(-1);
    }

    100% {
      transform: scaleX(0);
    }
  }

  margin: 0 auto;
  display: block;
  width: 20rem;
  text-align: left;
  height: auto;

  .icon {
    color: #fecc27;
    font-size: 2.5rem;
    opacity: 0.3;
    margin: 0 auto;

    z-index: 3;
    background: none;
    border: none;
    transition: animation 1.5s;
    transition-timing-function: ease-in-out;
  }

  .icon:hover {
    animation: flip 0.2s ease-out;
  }

  .icon:active {
    transform: scale(0.8);
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`

// const Triskele = styled(Img)`
//   width: 3rem;
//   height: auto;
//   float: left;
//   display: block;
//   opacity: 0.3;
// `

const IconLink = styled(Link)`
  text-decoration: none;
`;

const TriforceCaption = styled.h1`
  font-size: 1rem;
  opacity: 0.5;
  color: black;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
    margin-top: 0.6rem;
  }
`;