import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import TriskeleContainer from './TriskeleContainer';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';
import 'fontsource-roboto';

import { CgPokemon } from 'react-icons/cg';
import { FaPeace } from 'react-icons/fa';
import { GiBattleship, GiPalmTree } from 'react-icons/gi';

const Project = ({ title, details, stack, link, sourceCode, purpose, tech, lessons, data, alt1, alt2, icon }) => {
  const stackComponents = stack.map((tech, index) => {
    return (
      <li key={index}>
        <CgPokemon className="list-o" style={{ display: icon === 'creatures' ? 'inline-block' : 'none' }} />
        <FaPeace className="list-o" style={{ display: icon === 'mindful' ? 'inline-block' : 'none' }} />
        <GiBattleship className="list-o" style={{ display: icon === 'battleship' ? 'inline-block' : 'none' }} />
        <GiPalmTree className="list-o" style={{ display: icon === 'republic' ? 'inline-block' : 'none'} } />
        {tech}
      </li>
    )
  });

  const thumbnail = {
    src: data[1].src,
    fluid: data[1].fluid,
    alt: alt1
  };

  const screenshot = {
    src: data[0].src,
    fluid: data[0].fluid,
    alt: alt2
  };
  
  return (
    <ProjectContainer>
      <TriskeleContainer />
      
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
          <a href={link} target="_blank" rel="noreferrer">
            <Thumbnail src={thumbnail.src} fluid={thumbnail.fluid} alt={thumbnail.alt} />
          </a>
          <a href={link} target="_blank" rel="noreferrer" style={{ display: link === '#' ? 'none' : 'inline-block' }}>
            <span id="project-link">View Live</span>
          </a>
          <a href={sourceCode} target="_blank" rel="noreferrer" style={{ display: link === '#' ? 'none' : 'inline-block' }}>
            <span id="source-code">Source Code</span>
          </a>
        </LinkContainer>
      </DetailsContainer>

      <ImageContainer>
        <Screenshot
          fluid={screenshot.fluid}
          src={screenshot.src}
          alt={screenshot.alt}>
        </Screenshot>
      </ImageContainer>

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
    color: #36434d;
  }

  p {
    font-family: 'Roboto', sans-serif;
    width: 70%;
    line-height: 1.5rem;
    color: #828282;
  }

  @media screen and (max-width: 700px) {
    p {
      width: 85%;
    }
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
    color: #36434d;
  }

  ul {
    margin: 2rem auto;
    display: block;
    font-family: 'Roboto', sans-serif;
    color: #828282;
    width: 90%;
  }

  li {
    list-style-type: none;
  }

  .list-o {
    font-size: 1rem;
    margin-right: 0.5rem;
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

  #project-link,
  #source-code {
    font-size: 1.5rem;
    padding: 0 5rem;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    #project-link,
    #source-code {
      font-size: 1.3rem;
      padding: 0 1rem;
    }
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
  box-shadow: 0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);
  width: 70%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  margin: 4rem auto;
  display: block;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const Screenshot = styled(Img)`
  display: block;
  margin: 0 auto;
  width: 75%;
  box-shadow: 0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);
  border-radius: 10px;
`

const StoryContainer = styled.div`
  display: block;
  margin: 6rem auto;
  width: 80%;

  h1 {
    font-family: 'Playfair Display', sans-serif;
    color: #36434d;
    margin: 2rem auto;
    display: block;
  }

  span {
    font-family: 'Open Sans', sans-serif;
    color: #828282;
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