import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';
import epictetus from '../../assets/images/epictetus.jpg';

const BlogHeader = () => {
  const data = useStaticQuery(graphql`
    query MyStoic {
      allFile(filter: {
        ext: {
          regex: "/(jpeg)|(jpg)|(png)/"
        }, 
        name: {
          in: "epictetus"
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
      <WebContainer style={{ 
        backgroundImage: `url(${epictetus})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
      }}>
        <HeaderTextContainer>
          <HeaderText>
            Learn with the Stoic&nbsp; 
            <span className="gold-text">
              Programmer
            </span>
          </HeaderText>
        </HeaderTextContainer>
      </WebContainer>

      <MobileContainer>
        <Epictetus fluid={stoic.fluid} src={stoic.src} alt={stoic.alt} key={0} />

        <MobileText>
          Learn with the Stoic&nbsp;
          <span className="gold-text">
            Programmer
          </span>
        </MobileText>
      </MobileContainer>
    </HeaderContainer>
  )
}

export default BlogHeader;

const HeaderContainer = styled.div`
  width: 80vw;
  height: 35rem;
  margin-left: 8.5rem;

  @media screen and (max-width: 500px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const WebContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  height: 100%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const HeaderTextContainer = styled.div`
  width: 60%;
  margin: 0 4rem 0 2rem;

  @media screen and (max-width: 500px) {
    margin: 0 1rem;
  }
`;

const HeaderText = styled.h1`
  margin: 0 auto;
  font-size: 3.5rem;
  color: white;
  text-align: center;
  font-family: 'Playfair Display', sans-serif;

  .gold-text {
    color: #fecc27;
  }
`;

const MobileContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

const Epictetus = styled(Img)`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    width: 100%;
  }
`;

const MobileText = styled.h1`
  font-family: 'Playfair Display', sans-serif;
  font-size: 3rem;
  text-align: center;
  width: 80%;

  .gold-text {
    color: #fecc27;
    display: block;
  }
`;
