import React from 'react'
import styled from 'styled-components';

import SkillsList from './SkillsList';
import ProjectList from './ProjectList';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';

const Body = () => {
  return ( 
    <BodyContainer>
      <SkillsContainer id="skills">
        <h1>My Skills</h1>
        <SkillsList />
      </SkillsContainer>

      <ProjectSection id="projects">
        <ProjectList />
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
  width: 85%;

  h1 {
    font-family: 'Playfair Display', sans-serif;
    color: #36434d;
  }

  @media screen and (max-width: 700px) {
    display: block;

    h1 {
      text-align: center;
    }
  }
`

const ProjectSection = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 85%;

  h1 {
    text-align: left;
    font-family: 'Playfair Display', sans-serif;
    color: #36434d;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;

    h1 {
      text-align: center;
    }
  }
`
