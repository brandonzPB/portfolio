import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';

const ProjectFooter = ({ keyword }) => {
  const data = useStaticQuery(graphql`
    query Paintings {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["painting-0", "painting-1", "painting-2", "painting-3"]}}) {
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

  const paintings = [...data.allFile.edges]; // === [frame, mindful, creatures, battleship, republic]

  /*
    BELOW: CHANGE 3 TO 4 (ON FLUID REASSIGNMENT)
  */

  const mindfulAlt = 'Peaceful image with black stones and bamboo in the background';
  const creaturesAlt = 'Serene painting of a light blue sky, a grassy field, and the ocean in between';
  const republicAlt = '';

  if (keyword === 'mindful') {
    paintings[1].link = '/Creatures';
    paintings[1].title = 'Creatures of Habit';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;
    paintings[1].src = paintings[2].node.childImageSharp.fluid.src;
    paintings[1].alt = creaturesAlt;

    paintings[2].link = '/Republic';
    paintings[2].title = 'The Republic 310';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
    paintings[2].src = paintings[3].node.childImageSharp.fluid.src;
    paintings[2].alt = republicAlt;
  } else if (keyword === 'creatures') {
    paintings[1].link = '/Mindful'
    paintings[1].title = 'mindful.io';
    paintings[1].fluid = paintings[1].node.childImageSharp.fluid;
    paintings[1].src = paintings[1].node.childImageSharp.fluid.src;
    paintings[1].alt = mindfulAlt;

    paintings[2].link = '/Republic';
    paintings[2].title = 'The Republic 310';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
    paintings[2].src = paintings[3].node.childImageSharp.fluid.src;
    paintings[2].alt = republicAlt;
  } else if (keyword === 'battleship') {
    paintings[1].link = '/Creatures';
    paintings[1].title = 'Creatures of Habit';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;
    paintings[1].src = paintings[2].node.childImageSharp.fluid.src;
    paintings[1].alt = creaturesAlt;

    paintings[2].link = '/Republic';
    paintings[2].title = 'The Republic 310';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
    paintings[2].src = paintings[3].node.childImageSharp.fluid.src;
    paintings[2].alt = republicAlt;
  } else if (keyword === 'republic') {
    paintings[1].link = '/Creatures';
    paintings[1].title = 'Creatures of Habit';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;
    paintings[1].src = paintings[2].node.childImageSharp.fluid.src;
    paintings[1].alt = creaturesAlt;

    paintings[2].link = '/Mindful';
    paintings[2].title = 'mindful.io';
    paintings[2].fluid = paintings[1].node.childImageSharp.fluid;
    paintings[2].src = paintings[1].node.childImageSharp.fluid.src;
    paintings[2].alt = mindfulAlt;
  }

  return (
    <FooterContainer>
      <FooterHeadline>
        <h1>Check out my other projects</h1>
      </FooterHeadline>

      <FooterContent>
        <ProjectContainer>
          <ProjectAnchor to={paintings[1].link}>
            <ProjectThumbnail 
              fluid={paintings[1].fluid}
              src={paintings[1].src} 
              key={1} 
              alt={paintings[1].alt}
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>{paintings[1].title}</ProjectTitle>
          <ProjectLink to={paintings[1].link}>View Project</ProjectLink>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectAnchor to={paintings[2].link}>
            <ProjectThumbnail 
              fluid={paintings[2].fluid}
              src={paintings[2].src} 
              key={2} 
              alt={paintings[2].alt}
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>{paintings[2].title}</ProjectTitle>
          <ProjectLink to={paintings[2].link}>View Project</ProjectLink>
        </ProjectContainer>
      </FooterContent>
    </FooterContainer>
  )
}

export default ProjectFooter

const FooterContainer = styled.div`
  display: block;
  margin: 0 7rem;

  @media screen and (max-width: 500px) {
    margin: 0 1rem;
  }
`

const FooterHeadline = styled.div`
  font-family: 'Playfair Display', sans-serif;
  color: #36434d;
  margin: 2rem auto;
  display: block;
`

const FooterContent = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ProjectContainer = styled.div`
  margin: 2rem auto;
  display: block;
  text-align: center;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  color: #828282;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    margin: 4rem auto;
  }
`

const ProjectAnchor = styled(Link)``

const ProjectThumbnail = styled(Img)`
  width: 25rem;
  height: 20rem;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 3px 8px black;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`

const ProjectTitle = styled.h3`
  margin: 2rem auto;
`

const ProjectLink = styled(Link)`
  color: #0070b7;
  transition: border-bottom 0.3s ease 0;
  text-decoration: none;

  &:hover {
    color: #48CEF7;
    border-bottom: 2px solid #48cef7;
  }
`