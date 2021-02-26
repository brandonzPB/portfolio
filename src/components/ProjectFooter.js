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

  if (keyword === 'mindful') {
    paintings[1].link = '/Creatures';
    paintings[1].title = 'Creatures of Habit';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;

    paintings[2].link = '/Republic';
    paintings[2].title = 'The Republic 310';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
  } else if (keyword === 'creatures') {
    paintings[1].link = '/Mindful'
    paintings[1].title = 'mindful.io';
    paintings[1].fluid = paintings[1].node.childImageSharp.fluid;

    paintings[2].link = '/Republic';
    paintings[2].title = 'The Republic 310';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
  } else if (keyword === 'battleship') {
    paintings[1].link = '/Creatures';
    paintings[1].title = 'Creatures of Habit';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;

    paintings[2].link = '/Republic';
    paintings[2].title = 'The Republic 310';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
  } else if (keyword === 'republic') {
    paintings[1].link = '/Creatures';
    paintings[1].title = 'Creatures of Habit';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;

    paintings[2].link = '/Mindful';
    paintings[2].title = 'mindful.io';
    paintings[2].fluid = paintings[1].node.childImageSharp.fluid;
  }

  return (
    <FooterContainer>
      <FooterHeadline>
        <h1>Check out my other projects</h1>
      </FooterHeadline>

      <FooterContent>
        <ProjectContainer>
          <ProjectAnchor to={paintings[1].link}>
            <ProjectThumbnail fluid={paintings[1].node.childImageSharp.fluid} key={1} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>{paintings[1].title}</ProjectTitle>
          <ProjectLink to={paintings[1].link}></ProjectLink>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectAnchor to={paintings[2].link}>
            <ProjectThumbnail fluid={paintings[2].node.childImageSharp.fluid} key={2} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>{paintings[2].title}</ProjectTitle>
          <ProjectLink to={paintings[2].link}></ProjectLink>
        </ProjectContainer>
      </FooterContent>
    </FooterContainer>
  )
}

export default ProjectFooter

const FooterContainer = styled.div`
  display: block;
  margin: 0 7rem;
`

const FooterHeadline = styled.div`
  font-family: 'Playfair Display', sans-serif;
  margin: 2rem auto;
  display: block;
`

const FooterContent = styled.div`
  margin: 0 auto;
  display: grid;
  border: 2px solid red;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ProjectContainer = styled.div`
  margin: 0 auto;
  display: block;
  text-align: center;
`

const ProjectAnchor = styled(Link)``

const ProjectThumbnail = styled(Img)`
`

const ProjectTitle = styled.h3``

const ProjectLink = styled(Link)``