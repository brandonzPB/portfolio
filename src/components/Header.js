import { Link } from "gatsby"
import Img from 'gatsby-image';
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { HiPuzzle } from 'react-icons/hi';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: "me"}}) {
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

  const banner = {
    key: 0,
    fluid: data.allFile.edges[0].node.childImageSharp.fluid
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <IconContainer>
          <HiPuzzle className="icon" />
        </IconContainer>

        <TextContainer>
          <h3>Oh hello, I'm Brandon.</h3>
          <h3>Full-Stack <span id="gold-text">Developer</span></h3>
          <h3>and Life-Long Learner.</h3>
        </TextContainer>

        <ImageContainer>
          <Image key={banner.key} fluid={banner.fluid} />
        </ImageContainer>

        <DetailsContainer>         
          <ColOne>
            <p>I am a passionate Stoic who loves using code to build elegant, useful, and enjoyable experiences.</p>
            <p>Code is like an infinite pile of legos with each piece being made at the will of my imagination. (inspired by V. Anton Spraul).</p>
          </ColOne>

          <ColTwo>
            <p>
              Although I haven't received any formal training in programming, 
              I don't like to call myself a "self-taught" programmer
              because it would be a disservice to the incredible online resources that are
              available to almost anyone with a computer. I've used most of my free time
              (I'm studying economics and data science at UCLA) to study, practice, and build as much as I possibly can with code.
              Why? Because it's hard to not want to.
            </p>
          </ColTwo>
        </DetailsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  margin: 3rem auto 0 auto;
  display: block;
  text-align: center;
  width: 70%;
`

const HeaderContent = styled.div`
  
`

const IconContainer = styled.div`
  margin: 0 auto;
  display: block;
  text-align: left;

  .icon {
    color: #fecc27;
    font-size: 3rem;
    margin: 0 auto;
    z-index: 3;
    background: none;
    border: none;
    transition: transform 0.3s;
  }

  .icon:hover {
    transform: scale(1.1);
  }
`

const TextContainer = styled.div`
  text-align: left;
  margin: 0 2rem;
  font-size: 2rem;

  #gold-text {
    color: #fecc27;
  }
`

const ImageContainer = styled.div`
  display: block;
  margin: 2rem auto;
`

const Image = styled(Img)`
  height: 50%;
  width: 50%;
  margin: 0 auto;
`

const DetailsContainer = styled.div`
  margin: 2rem auto;
  display: block;
  columns: 2;
  width: 100%;
  border: 2px solid red;
`

const ColOne = styled.div`
  display: block;
  margin: 0 auto;
  height: 100%;
  border: 2px solid orange;
`

const ColTwo = styled.div`
  display: block;
  margin: 0 auto;
  height: 100%;
  border: 2px solid yellow;
`