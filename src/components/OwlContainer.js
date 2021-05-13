import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const OwlContainer = () => {
  const data = useStaticQuery(graphql`
    query MyOwl {
      allFile(filter: {ext: {regex: "/(png)/"}, name: {in: ["owl"]}}) {
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

  const owl = {
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    src: data.allFile.edges[0].node.childImageSharp.fluid.src,
    alt: 'Image of an owl'
  };

  return (
    <Owl__Container>
      <Link to="/learn">
        <Owl className="icon" fluid={owl.fluid} src={owl.src} alt={owl.alt} />
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

const Owl = styled(Img)`
  width: 3rem;
  height: auto;
  float: right;
  display: block;
  opacity: 0.3;
`;