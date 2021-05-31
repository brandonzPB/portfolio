import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MyIcon = ({ modalState = null }) => {
  const data = useStaticQuery(graphql`
    query MyIcon {
      allFile(filter: {
        ext: {
          regex: "/png/"
        },
      name: {
        in: ["me_3"]
      }}) {
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

  const [display, setDisplay] = useState({ status: true });

  const iconRef = useRef(false);

  useEffect(() => {
    return () => {
      iconRef.current = false;
    }
  }, []);

  useEffect(() => {
    if (modalState !== null && iconRef.current) {
      if (modalState.display) {
        setDisplay({ status: false });
      } else if (!modalState.display) {
        setDisplay({ status: true });
      }
    }
  }, [modalState, setDisplay, iconRef]);

  const myIcon = data.allFile.edges[0].node.childImageSharp;

  return (
    <IconContainer 
      style={{
        display: display.status ? 'inline' : 'none'
      }}
      ref={iconRef}
    >
      <IconLink to="/Brandon" >
      <MyIconImage fluid={myIcon.fluid} alt="A small picture of me wearing a suit." />
    </IconLink>
    </IconContainer>
  )
}

export default MyIcon;

const IconContainer = styled.div``;

const IconLink = styled(Link)``;

const MyIconImage = styled(Img)`
  width: 25px;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }
`;
