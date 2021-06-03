import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectPreview = ({ details, img, link, title, }) => {
  return (
    <ProjectContainer>
      <ProjectImage__Container>
        <ProjectAnchor to={link}>
          <ProjectThumbnail
            alt={img.alt}
            className="thumbnail"
            fluid={img.fluid} 
            src={img.src}
          >
          </ProjectThumbnail>
        </ProjectAnchor>
      </ProjectImage__Container>

      <ProjectDetails__Container>
        <ProjectTitle>{title}</ProjectTitle>
        
        <ProjectDetails>{details}</ProjectDetails>

        <ProjectLink to={link}>View Project</ProjectLink>
      </ProjectDetails__Container>
    </ProjectContainer>
  )
}

export default ProjectPreview;

const ProjectContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin: 2rem auto 5rem auto;
  height: auto;
  width: 48%;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 950px) {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const ProjectImage__Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 18rem;
`;

const ProjectAnchor = styled(Link)``;

const ProjectThumbnail = styled(Img)`
  width: 18rem;
  height: auto;
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
`;

const ProjectDetails__Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectTitle = styled.h3`
  margin: 2rem 0 0 0;
  font-size: 1.5rem;
  color: #36434d;
`;

const ProjectDetails = styled.p`
  line-height: 1.25rem;
  margin: 1rem auto;
  width: 90%;
  text-align: center;
  color: #828282;
`;

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
`;
