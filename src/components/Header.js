import { Link } from "gatsby"
import Img from 'gatsby-image';
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Puzzle from './Puzzle';

import 'fontsource-playfair-display/600.css';
import 'fontsource-roboto';
import 'fontsource-open-sans';

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
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    src: data.allFile.edges[0].node.childImageSharp.fluid.src,
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Puzzle />
        
        <TextContainer>
          <div id="desktop">
            <h3>Oh hello, I'm Brandon. </h3>
            <h3>Full-Stack <span className="gold-text">Developer</span></h3>
            <h3>and Life-Long Learner</h3>
          </div>
          <div id="mobile">
            <h3>Oh hello, I'm Brandon. Full-Stack <span className="gold-text">Developer</span> and Life-Long Learner</h3>
          </div>
        </TextContainer>

        <ImageContainer>
          <Image key={banner.key} fluid={banner.fluid} src={banner.src} alt="Picture of me" />
        </ImageContainer>

        <DetailsContainer>         
          <ColOne>
            <p>
              I am a 22 year-old passionate Stoic who loves using code to build elegant, useful, and enjoyable experiences. <br/><br/>
              To me, code is like an infinite pile of legos with each piece being made at the will of my imagination. (inspired by V. Anton Spraul)
            </p>
          </ColOne>

          <ColTwo>
            <p>
              Aside from studying economics and data science at UCLA, 
              I've used most of my free time to study, practice, and build as much as I possibly can with code.
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

  @media screen and (max-width: 500px) {
    width: 85%;
  }
`

const HeaderContent = styled.div`
  
`

const TextContainer = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
      translateY(-30px);
    }

    to {
      opacity: 1;
      translateY(30px);
    }
  }

  text-align: left;
  margin: 0 2rem;
  font-size: 2rem;
  font-family: 'Playfair Display', sans-serif;
  color: #36434d;

  h3 {
    animation: fadein 2s;
  }

  #mobile {
    display: none;
  }

  .gold-text {
    color: #fecc27;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
    margin: 0 auto;
    width: auto;

    #desktop {
      display: none;
    }

    #mobile {
      display: block;
      width: 110%;
      padding: 0;
    }
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

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const DetailsContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  color: #828282;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;
    text-align: left;
  }
`

const ColOne = styled.div`
  display: block;
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  text-align: left;

  @media screen and (max-width: 700px) {
    padding: 0;
    width: 100%;
  }
`

const ColTwo = styled.div`
  display: block;
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  text-align: left;

  @media screen and (max-width: 700px) {
    padding: 0;
    margin-top: 1.5rem;
    width: 100%;
  }
`