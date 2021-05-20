import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';

const BlogHeader = () => {
  const data = useStaticQuery(graphql`
    query MyStoic {
      allFile(filter: {
        ext: {
          regex: "/(jpeg)|(jpg)|(png)/"
        }, 
        name: {
          in: "epictetus_programming"
        }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxHeight: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
      }
    }
  `);

  const stoic = {
    key: 0,
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    src: data.allFile.edges[0].node.childImageSharp.fluid.src,
    alt: "Epictetus writing code"
  };

  return (
    <HeaderContainer>
      <BannerContainer>
        <Epictetus fluid={stoic.fluid} src={stoic.src} alt={stoic.alt} key={0} />

        <HeaderTextContainer>
          <HeaderText>Learn with the Stoic Programmer</HeaderText>
        </HeaderTextContainer>
      </BannerContainer>
    </HeaderContainer>
  )
}

export default BlogHeader;

const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
`;

const BannerContainer = styled.div`
  width: 100vw;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
`;

const Epictetus = styled(Img)`
  width: 40%;
  height: auto;

  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
  }
`;

const HeaderTextContainer = styled.div`
  width: 60%;
  margin: 0 4rem;

  @media screen and (max-width: 500px) {
    margin: 0 1rem;
  }
`;

const HeaderText = styled.h1`
  margin: 0 auto;
  font-size: 3.5rem;
  color: black;
  font-family: 'Playfair Display', sans-serif;
`;
