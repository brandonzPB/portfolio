import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

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
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;

    paintings[2].link = '/Republic';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
  } else if (keyword === 'creatures') {
    paintings[1].link = '/Mindful'
    paintings[1].fluid = paintings[1].node.childImageSharp.fluid;

    paintings[2].link = '/Republic';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
  } else if (keyword === 'battleship') {
    paintings[1].link = '/Creatures';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;

    paintings[2].link = '/Republic';
    paintings[2].fluid = paintings[3].node.childImageSharp.fluid;
  } else if (keyword === 'republic') {
    paintings[1].link = '/Creatures';
    paintings[1].fluid = paintings[2].node.childImageSharp.fluid;

    paintings[2].link = '/Mindful';
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

          <ProjectTitle></ProjectTitle>
          <ProjectDetails></ProjectDetails>
          <ProjectLink to={paintings[1].link}></ProjectLink>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectAnchor to={paintings[2].link}>
            <ProjectThumbnail fluid={paintings[2].node.childImageSharp.fluid} key={2} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle></ProjectTitle>
          <ProjectDetails></ProjectDetails>
          <ProjectLink to={paintings[2].link}></ProjectLink>
        </ProjectContainer>
      </FooterContent>
    </FooterContainer>
  )
}

export default ProjectFooter

const FooterContainer = styled.div``

const FooterHeadline = styled.div``

const FooterContent = styled.div``

const ProjectContainer = styled.div``

const ProjectAnchor = styled(Link)``

const ProjectThumbnail = styled(Img)``

const ProjectTitle = styled.h3``

const ProjectDetails = styled.p``

const ProjectLink = styled(Link)``