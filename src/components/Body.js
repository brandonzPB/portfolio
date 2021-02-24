import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Body = () => {
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
    <BodyContainer>
      <SkillsContainer>
        <h1>My Skills</h1>
        <SkillsList>
          <ul>
            <li>React (JavaScript and TypeScript)</li>
            <li>React Context API and Redux</li>
            <li>Gatsby Styled Components</li>
            <li>GraphQL</li>
          </ul>
          <ul>
          <li>Bootstrap</li>
            <li>Sass</li>
            <li>HTML5</li>
            <li>NodeJS</li>
          </ul>
          <ul>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Heroku</li>
            <li>Python</li>
          </ul>
          <ul>
            <li>Jupyter Notebooks</li>
            <li>Adobe Photoshop</li>
          </ul>
        </SkillsList>
      </SkillsContainer>

      <ProjectsContainer>
        <h1>Projects I've Made</h1>
        <ProjectContainer>
          <ProjectAnchor to="/creatures">
            <ProjectThumbnail fluid={paintings[2].node.childImageSharp.fluid} key={1} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle></ProjectTitle>
          <ProjectDetails></ProjectDetails>
          <ProjectLink to="/creatures"></ProjectLink>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectAnchor to="/mindful">
            <ProjectThumbnail fluid={paintings[0].node.childImageSharp.fluid} key={2} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle></ProjectTitle>
          <ProjectDetails></ProjectDetails>
          <ProjectLink to="/mindful"></ProjectLink>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectAnchor to="/battleship">
            <ProjectThumbnail fluid={paintings[3].node.childImageSharp.fluid} key={3} className="thumbnail"></ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle></ProjectTitle>
          <ProjectDetails></ProjectDetails>
          <ProjectLink to="/battleship"></ProjectLink>
        </ProjectContainer>
      </ProjectsContainer>
    </BodyContainer>
  )
}

export default Body

const BodyContainer = styled.div`
  margin: 0 auto;
  display: block;
  border: 2px solid black;
`

const SkillsContainer = styled.div`
  border: 2px solid red;
  margin: 0 5rem;
`

const SkillsList = styled.div`
  margin: 0 auto;
  columns: 4;

  li {
    list-style-type: none;
  }
`

const ProjectsContainer = styled.div``

const ProjectContainer = styled.div``

const ProjectAnchor = styled(Link)``

const ProjectThumbnail = styled(Img)`
  height: 50%;
  width: 50%;
`

const ProjectTitle = styled.h3``

const ProjectDetails = styled.p``

const ProjectLink = styled(Link)``
