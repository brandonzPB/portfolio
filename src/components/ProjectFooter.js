import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import 'fontsource-playfair-display/600.css';
import 'fontsource-open-sans';
import 'fontsource-roboto';

const ProjectFooter = ({ otherA, otherB }) => {
  const data = useStaticQuery(graphql`
    query AllImagesQuery {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {}}) {
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

  const images = data.allFile.edges.reduce((array, img) => {
    if (img.node.name === otherA.name) {

      array.push({
        fluid: img.node.childImageSharp.fluid,
        src: img.node.childImageSharp.fluid.src,
        link: otherA.link,
        title: otherA.title,
        alt: otherA.alt
      });

    } else if (img.node.name === otherB.name) {

      array.push({
        fluid: img.node.childImageSharp.fluid,
        src: img.node.childImageSharp.fluid.src,
        link: otherB.link,
        title: otherB.title,
        alt: otherB.alt
      });

    }
    return array;
  }, []);

  return (
    <FooterContainer>
      <FooterHeadline>
        <h1>Check out my other projects</h1>
      </FooterHeadline>

      <FooterContent>
        <ProjectContainer>
          <ProjectAnchor to={images[0].link}>
            <ProjectThumbnail 
              fluid={images[0].fluid}
              src={images[0].src} 
              key={1} 
              alt={images[0].alt}
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>{images[0].title}</ProjectTitle>
          <ProjectLink to={images[0].link}>View Project</ProjectLink>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectAnchor to={images[1].link}>
            <ProjectThumbnail 
              fluid={images[1].fluid}
              src={images[1].src} 
              key={2} 
              alt={images[1].alt}
              className="thumbnail">
            </ProjectThumbnail>
          </ProjectAnchor>

          <ProjectTitle>{images[1].title}</ProjectTitle>
          <ProjectLink to={images[1].link}>View Project</ProjectLink>
        </ProjectContainer>
      </FooterContent>
    </FooterContainer>
  )
}

export default ProjectFooter

const FooterContainer = styled.div`
  display: block;
  margin: 0 7rem;
  width: 85%;

  @media screen and (max-width: 500px) {
    margin: 0 1rem;
  }
`

const FooterHeadline = styled.div`
  font-family: 'Playfair Display', sans-serif;
  color: #36434d;
  margin: 2rem auto;
  display: block;
  width: 90%;
`

const FooterContent = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ProjectContainer = styled.div`
  margin: 2rem auto;
  display: block;
  text-align: center;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  color: #828282;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    margin: 4rem auto;
  }
`

const ProjectAnchor = styled(Link)`
`

const ProjectThumbnail = styled(Img)`
  width: 25rem;
  height: 20rem;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);
  transition: transform 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`

const ProjectTitle = styled.h3`
  margin: 2rem auto;
`

const ProjectLink = styled(Link)`
  color: #0070b7;
  transition: border-bottom 0.3s ease 0;
  text-decoration: none;

  &:hover {
    color: #48CEF7;
    border-bottom: 2px solid #48cef7;
  }
`