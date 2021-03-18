import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { DiReact, DiHtml5, DiSass, DiBootstrap, DiNodejsSmall, DiPhotoshop } from 'react-icons/di';
import { SiRedux, SiGatsby, SiGraphql, SiMongodb, SiPython, SiJupyter, SiHeroku, SiJest } from 'react-icons/si';
import { GoPrimitiveDot } from 'react-icons/go';
import { GiTriforce } from 'react-icons/gi';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';
import 'fontsource-roboto';

const Body = () => {
  const data = useStaticQuery(graphql`
    query MyPaintings {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["painting-1", "painting-2", "painting-3"]}}) {
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

  const paintings = [...data.allFile.edges];

  return ( 
    <BodyContainer>
      <SkillsContainer>
        <h1>My Skills</h1>
        <SkillsListContainer>
          <ul>
            <li>
              <DiReact id="react" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">React</span>
            </li>
            <li>
              <SiRedux id="redux" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">React Context API</span>
            </li>
            <li>
              <SiGatsby id="gatsby" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Gatsby Styled Components</span>
            </li>
            <li>
              <SiGraphql id="graphql" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">GraphQL</span>
            </li>
          </ul>
            
          <ul>
            <li>
              <DiBootstrap id="bootstrap" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Bootstrap</span>
            </li>
            <li>
              <DiSass id="sass" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Sass</span>
            </li>
            <li>
              <DiHtml5 id="html" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">HTML5</span>
            </li>
            <li>
              <DiNodejsSmall id="node" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">NodeJS</span>
            </li>
          </ul>

          <ul>
            <li>
              <GoPrimitiveDot id="express" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Express</span>
            </li>
            <li>
              <SiMongodb id="mongo" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">MongoDB</span>
            </li>
            <li>
              <SiJest id="jest" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Jest</span>
            </li>
            <li>
              <SiPython id="python" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Python</span>
            </li>
          </ul>

          <ul>
            <li>
              <SiHeroku id="heroku" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Heroku</span>
            </li>
            <li>
              <DiPhotoshop id="photoshop" className="icon" />
              <GiTriforce className="list-type" />
              <span className="list-text">Adobe Photoshop</span>
            </li>
          </ul>
        </SkillsListContainer>
      </SkillsContainer>

      <ProjectSection>
        <h1>Projects I've Made</h1>

        <ProjectList>
          <ProjectContainer>
            <ProjectAnchor to="/Creatures">
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
            <ProjectLink to="/Creatures">View Project</ProjectLink>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectAnchor to="/Mindful">
              <ProjectThumbnail 
                fluid={paintings[0].node.childImageSharp.fluid} 
                src={paintings[0].node.childImageSharp.fluid.src}
                key={0} 
                className="thumbnail">
              </ProjectThumbnail>
            </ProjectAnchor>

            <ProjectTitle>mindful.io</ProjectTitle>
            <ProjectDetails>I made this project for the purpose of helping users to become more mindful in their daily life.</ProjectDetails>
            <ProjectLink to="/Mindful">View Project</ProjectLink>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectAnchor to="/Battleship">
              <ProjectThumbnail 
                fluid={paintings[2].node.childImageSharp.fluid} 
                src={paintings[2].node.childImageSharp.fluid.src}
                key={2} 
                className="thumbnail">
              </ProjectThumbnail>
            </ProjectAnchor>

            <ProjectTitle>Battleship</ProjectTitle>
            <ProjectDetails>This was the first project I made solely for the purpose of putting my skills into practice.</ProjectDetails>
            <ProjectLink to="/Battleship">View Project</ProjectLink>
          </ProjectContainer>
        </ProjectList>
      </ProjectSection>
    </BodyContainer>
  )
}

export default Body

const BodyContainer = styled.div`
  margin: 0 7rem;
  display: block;

  @media screen and (max-width: 700px) {
    margin: 0 1rem;
  }
`

const SkillsContainer = styled.div`
  margin: 5rem auto;
  width: 100%;

  h1 {
    font-family: 'Playfair Display', sans-serif;
    color: #36434d;
  }

  @media screen and (max-width: 700px) {
    display: block;
  }
`

const SkillsListContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  ul {
    margin: 0 auto;
    width: 100%;
    text-align: left;
    display: block;

    @media screen and (max-width: 500px) {
      height: auto;
      padding: 0 1.5rem;
      width: 90%;
      display: block;
    }
  }

  li {
    list-style-type: none;
    margin: 0.5rem auto;
    text-align: left;
    font-family: 'Open Sans', sans-serif;
    color: #828282;

    .list-type { display: none; }

    @media screen and (max-width: 500px) {
      .list-type {
        display: inline-block;
        width: 1rem;
        font-size: 1rem;
        color: #fecc27;
        margin-right: 0.5rem;
      }
    }
  }

  .list-text {}

  .icon { font-size: 0.75rem; margin: 0 1rem; }

  @media screen and (max-width: 500px) {
    .icon {
      display: none;
    }
  }

  #react { color: #48CEF7; }

  #redux { color: #7E5ABB; }

  #gatsby { color: #663399; }

  #graphql { color: #DE33A6; }

  #bootstrap { color: #533B78; }

  #sass { color: #C76494; }

  #html { color: #DD4B25; }

  #node { color: #93B74C; }

  #express { color: #5896CE; }

  #mongo { color: #52A74B; }

  #jest { color: #BC1224; }

  #heroku { color: #5D1BB3; }

  #python { color: #F7DC78; }

  #jupyter { color: #F37726; }

  #photoshop { color: #001D34; }
`

const ProjectSection = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;

  h1 {
    text-align: left;
    font-family: 'Playfair Display', sans-serif;
    color: #36434d;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const ProjectList = styled.div`
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
  margin: 2rem auto 4rem auto;
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
  box-shadow: 0 3px 8px black;
  transition: transform 0.5s;
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
