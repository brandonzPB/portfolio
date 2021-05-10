import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogHeader = () => {
  const data = useStaticQuery(graphql`
    query MyHeader {
      allFile(filter: {ext: {regex: "/png"},
      name: {in: ["me_2"]}}) {
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
      <HeaderImage fluid={myHeader.fluid} alt="A picture of me smiling" />
    </HeaderContainer>
  )
}

export default BlogHeader;

const HeaderContainer = styled.div``;

const HeaderImage = styled(Img)``;
