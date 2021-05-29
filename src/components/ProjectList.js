import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ProjectList = ({ display }) => {
  const data = useStaticQuery(graphql`
    query MyPaintings {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["painting-creatures", "painting-mindful", "painting-battleship", "republic310-1"]}}) {
        edges {
          node {
            name
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

  const paintings = [...data.allFile.edges]
    .sort((a, b) => {
      if (a.node.name < b.node.name) return -1;
      if (a.node.name > b.node.name) return 1;
    });

  return (
    <ProjectListContainer>.
      <h1>Projects I've Made</h1>

      <ProjectsList>
        <ProjectContainer style={{ display: display.status ? 'block' : 'none' }}>
          <ProjectAnchor to="/Creatures_of_Habit">
            <ProjectThumbnail
              fluid={paintings[1].node.childImageSharp.fluid} 
              src={paintings[1].node.childImageSharp.fluid.src}
              key={1} 
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>Creatures of Habit</ProjectTitle>
          <ProjectDetails>
            I made this project to help users quantify areas of their life that are intrinsically qualitative (e.g., mental health).
          </ProjectDetails>
          <ProjectLink to="/Creatures_of_Habit">View Project</ProjectLink>
        </ProjectContainer>

        <ProjectContainer style={{ display: display.status ? 'block' : 'none' }}>
          <ProjectAnchor to="/Republic_310">
            <ProjectThumbnail 
              fluid={paintings[3].node.childImageSharp.fluid} 
              src={paintings[3].node.childImageSharp.fluid.src}
              key={3} 
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>The Republic 310</ProjectTitle>
          <ProjectDetails>I made this project for an e-commerce startup who wanted their own full-stack website.</ProjectDetails>
          <ProjectLink to="/Republic_310">View Project</ProjectLink>
        </ProjectContainer>

        <ProjectContainer style={{ display: display.status ? 'block' : 'none' }}>
          <ProjectAnchor to="/Mindful">
            <ProjectThumbnail 
              fluid={paintings[2].node.childImageSharp.fluid} 
              src={paintings[2].node.childImageSharp.fluid.src}
              key={2} 
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>mindful.io</ProjectTitle>
          <ProjectDetails>I made this project for the purpose of helping users to become more mindful in their daily life.</ProjectDetails>
          <ProjectLink to="/Mindful">View Project</ProjectLink>
        </ProjectContainer>

        <ProjectContainer style={{ display: display.status ? 'block' : 'none' }}>
          <ProjectAnchor to="/Battleship">
            <ProjectThumbnail 
              fluid={paintings[0].node.childImageSharp.fluid} 
              src={paintings[0].node.childImageSharp.fluid.src}
              key={0} 
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>Battleship</ProjectTitle>
          <ProjectDetails>This was the first project I made solely for the purpose of putting my skills into practice.</ProjectDetails>
          <ProjectLink to="/Battleship">View Project</ProjectLink>
        </ProjectContainer>
      </ProjectsList>
    </ProjectListContainer>
  )
}

export default ProjectList;

const ProjectListContainer = styled.div``;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ProjectContainer = styled.div`
  display: block;
  text-align: center;
  margin: 2rem auto 8rem auto;
  height: auto;
  width: auto;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`

const ProjectAnchor = styled(Link)``

const ProjectThumbnail = styled(Img)`
  height: 75%;
  width: 75%;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);
  transition: transform 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    height: auto;
    display: block;
  }
`

const ProjectTitle = styled.h3`
  margin: 2rem 0 0 0;
  font-size: 1.5rem;
  color: #36434d;
`

const ProjectDetails = styled.p`
  line-height: 1.25rem;
  margin: 1rem auto;
  width: 90%;
  text-align: center;
  color: #828282;
`

const ProjectLink = styled(Link)`
  color: #0070b7;
  transition: border-bottom 0.3s ease 0s;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;

  &:visited, &:link {
    color: #0070b7;
  }

  &:hover {
    color: #48CEF7;
    border-bottom: 2px solid #48cef7; 
  }

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`