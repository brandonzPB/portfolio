import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';

import { CgPokemon } from 'react-icons/cg';

const Project = ({ title, details, stack, link, purpose, tech, lessons, data }) => {
  const stackComponents = stack.map((tech, index) => {
    return (
      <li key={index}>
        <CgPokemon className="list-o" />
        {tech}
      </li>
    )
  });

  const thumbnail = {
    src: data.allFile.edges[0].node.childImageSharp.fluid.src,
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    alt: "A serene painting of a light blue sky, a grassy field, and the ocean"
  };
  
  return (
    <ProjectContainer>
      <HeaderContainer>
        <h1>{title}</h1>
        <p>{details}</p>
      </HeaderContainer>

      <DetailsContainer>
        <ListContainer>
          <h1>Technologies Used</h1>
          <ul>
            {stackComponents}
          </ul>
        </ListContainer>
        
        <LinkContainer>
          <Thumbnail src={thumbnail.src} fluid={thumbnail.fluid} alt={thumbnail.alt} />
          <a href={link} target="_blank" rel="noreferrer">
            <span id="project-link">View Live</span>
          </a>
        </LinkContainer>
      </DetailsContainer>

      <StoryContainer>
        <PurposeContainer>
          <h1>Project Inspiration and Purpose</h1>
          <span id="purpose">{purpose}</span>
        </PurposeContainer>

        <TechContainer>
          <h1>The Tech that Made it Happen</h1>
          <span id="tech">{tech}</span>
        </TechContainer>

        <LessonsContainer>
          <h1>Challenges and Lessons</h1>
          <span id="lessons">{lessons}</span>
        </LessonsContainer>
      </StoryContainer>
    </ProjectContainer>
  )
}

export default Project

const ProjectContainer = styled.div`
  display: block;
  margin: 2rem 4rem;

  @media screen and (max-width: 500px) {
    margin: 2rem;
  }
`

const HeaderContainer = styled.div`
  margin: 2rem auto;
  display: block;

  h1 {
    margin-bottom: 1rem;
    font-family: 'Playfair Display', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    width: 70%;
    line-height: 1.5rem;
  }
`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ListContainer = styled.div`
  margin: 3rem auto 0 auto;
  display: block;
  width: 70%;

  h1 {
    font-family: 'Playfair Display', sans-serif;
  }

  ul {
    margin: 2rem auto;
    display: block;
    font-family: 'Open Sans', sans-serif;
    width: 80%;
  }

  li {
    list-style-type: none;
  }

  .list-o {
    font-size: 0.8rem;
    margin-right: 1rem;
    color: #fecc27;
  }
`

const LinkContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;

  a, a:link, a:visited {
    color: #0070b7;
    transition: border-bottom 0.3s ease 0;
    text-decoration: none;
  }

  #project-link {
    font-size: 1.5rem;
  }

  a:hover {
    color: #48CEF7;
    border-bottom: 2px solid #48CEF7;
  }
`

const Thumbnail = styled(Img)`
  display: block;
  margin: 0 auto 1.5rem auto;
  border-radius: 5px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const StoryContainer = styled.div`
  display: block;
  margin: 6rem auto;
  width: 80%;

  h1 {
    font-family: 'Playfair Display', sans-serif;
    margin: 2rem auto;
    display: block;
  }

  span {
    font-family: 'Open Sans', sans-serif;
    width: 60%;
    max-width: 60%;
    line-height: 1.5rem;
  }
`

const PurposeContainer = styled.div`
  margin-bottom: 7rem;
`

const TechContainer = styled.div`
  margin-bottom: 7rem;
`

const LessonsContainer = styled.div`
  margin-bottom: 7rem;
`