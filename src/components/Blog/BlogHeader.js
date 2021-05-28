import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';
import epictetus from '../../assets/images/epictetus.jpg';

const BlogHeader = () => {
  // const data = useStaticQuery(graphql`
  //   query MyStoic {
  //     allFile(filter: {
  //       ext: {
  //         regex: "/(jpeg)|(jpg)|(png)/"
  //       }, 
  //       name: {
  //         in: "epictetus"
  //       }}) {
  //         edges {
  //           node {
  //             childImageSharp {
  //               fluid(maxHeight: 1000, quality: 90) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //     }
  //   }
  // `);

  // const stoic = {
  //   key: 0,
  //   fluid: data.allFile.edges[0].node.childImageSharp.fluid,
  //   src: data.allFile.edges[0].node.childImageSharp.fluid.src,
  //   alt: "Epictetus writing code"
  // };

  return (
    <HeaderContainer style={{ 
      backgroundImage: `url(${epictetus})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'transparent',
    }}>
      <BannerContainer>
        <HeaderTextContainer>
          <HeaderText>Learn with the Stoic Programmer</HeaderText>
        </HeaderTextContainer>

        {/* <Epictetus fluid={stoic.fluid} src={stoic.src} alt={stoic.alt} key={0} /> */}
      </BannerContainer>
    </HeaderContainer>
  )
}

export default BlogHeader;

const HeaderContainer = styled.div`
  width: 80vw;
  height: 35rem;
  margin-left: 8.5rem;
`;

const BannerContainer = styled.div`
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
`;
