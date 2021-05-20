import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MyIcon = () => {
  const data = useStaticQuery(graphql`
    query MyIcon {
      allFile(filter: {ext: {regex: "/png/"},
      name: {in: ["me_3"]}}) {
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

  const myIcon = data.allFile.edges[0].node.childImageSharp;

  return (
    <IconLink to="/Brandon">
      <MyIconImage fluid={myIcon.fluid} alt="A small picture of me wearing a suit." />
    </IconLink>
  )
}

export default MyIcon;

const IconLink = styled(Link)``;

const MyIconImage = styled(Img)`
  width: 25px;
  display: inline-block;
`;
