import React from 'react'
import styled from 'styled-components';

const Project = ({ title, details, stack, link, purpose, tech, lessons }) => {
  const stackComponents = stack.map((tech, index) => {
    return (
      <li key={index}>{tech}</li>
    )
  });
  
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
        
        <a href={link} target="_blank" rel="noreferrer">
          <span id="project-link">View Live</span>
        </a>
      </DetailsContainer>

      <StoryContainer>
        <PurposeContainer>{purpose}</PurposeContainer>

        <TechContainer>{tech}</TechContainer>

        <LessonsContainer>{lessons}</LessonsContainer>
      </StoryContainer>
    </ProjectContainer>
  )
}

export default Project

const ProjectContainer = styled.div``

const HeaderContainer = styled.div``

const DetailsContainer = styled.div``

const ListContainer = styled.div``

const StoryContainer = styled.div``

const PurposeContainer = styled.div``

const TechContainer = styled.div``

const LessonsContainer = styled.div``