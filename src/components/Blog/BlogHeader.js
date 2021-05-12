import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import TriskeleContainer from '../TriskeleContainer';
import OwlContainer from '../OwlContainer';

const BlogHeader = () => {
  const data = useStaticQuery(graphql`
    query MyHeader {
      allFile(filter: {ext: {regex: "/(png)|(jpg)|(jpeg)/"},
      name: {in: ["owl"]}}) {
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

  const myHeader = data.allFile.edges[0].node.childImageSharp;

  return (
    <HeaderContainer>
        <OwlBanner fluid={myHeader.fluid} src={myHeader.fluid.src} alt="" />
        <TriskeleContainer />
        <OwlContainer />
    </HeaderContainer>
  )
}

export default BlogHeader;

const HeaderContainer = styled.div`
  width: 90vw;
`;

const OwlBanner = styled(Img)`
  height: 25%;
  width: 100%;
`;
