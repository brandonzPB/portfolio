import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Img } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ProjectFooter = () => {
  const data = useStaticQuery(graphql`
    query MyPaintings {
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

  const paintings = [...data.allFile.edges]; // image sources: [2, 0, 1, 3];

  return (
    <FooterContainer>
      <FooterHeadline>
        <h1>Check out my other projects</h1>
      </FooterHeadline>

      <FooterContent>
        <ProjectContainer>
          <ProjectAnchor to="/Creatures">
            <ProjectThumbnail fluid={paintings[2].node.childImageSharp.fluid} key={1} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle></ProjectTitle>
          <ProjectDetails></ProjectDetails>
          <ProjectLink to="/Creatures"></ProjectLink>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectAnchor to="/Mindful">
            <ProjectThumbnail fluid={paintings[0].node.childImageSharp.fluid} key={2} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle></ProjectTitle>
          <ProjectDetails></ProjectDetails>
          <ProjectLink to="/Mindful"></ProjectLink>
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