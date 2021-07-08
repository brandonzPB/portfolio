import Img from "gatsby-image"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import "fontsource-playfair-display/600.css"
import "fontsource-open-sans"

import uclaSrc from "../assets/images/ucla_econ.png"

const Header = ({ modalState }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { ext: { regex: "/(jpg)|(png)|(jpeg)/" }, name: { in: "me" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const [display, setDisplay] = useState({ status: true })

  const headerRef = useRef(true)

  useEffect(() => {
    return () => {
      headerRef.current = false
    }
  }, [headerRef])

  useEffect(() => {
    if (headerRef.current) {
      if (modalState.display) {
        setDisplay({ status: false })
      } else if (!modalState.display) {
        setDisplay({ status: true })
      }
    }
  }, [modalState, setDisplay, headerRef])

  const banner = {
    key: 0,
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    src: data.allFile.edges[0].node.childImageSharp.fluid.src,
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTopContainer>
          <TextContainer>
            <div id="desktop">
              <h3>Oh hello, I'm Brandon.</h3>
              <h3>
                Software <span className="gold-text">Engineer</span>
              </h3>
              <h3>and Life-Long Learner</h3>
            </div>
            <div id="mobile">
              <h3>Oh hello, I'm Brandon.</h3>
              <h3>
                Software <span className="gold-text">Engineer</span>
              </h3>
              <h3>and Life-Long Learner</h3>
            </div>
          </TextContainer>

          <UCLAImg src={uclaSrc} />
        </HeaderTopContainer>

        <ImageContainer
          style={{ display: display.status ? "block" : "none" }}
          ref={headerRef}
        >
          <Image
            fluid={banner.fluid}
            alt="Picture of me (a bald man) in a suit"
          />
        </ImageContainer>

        <DetailsContainer>
          <ColOne>
            <p>
              I am a 22 year-old passionate creative who loves using code to
              create solutions and build useful, elegant, and enjoyable
              experiences. <br />
              <br />
              To me, code is like an infinite pile of legos with each piece
              being made at the will of my imagination. (inspired by V. Anton
              Spraul)
            </p>
          </ColOne>

          <ColTwo>
            <p>
              I've just graduated from UCLA and while studying economics and
              data science at university, I've used most of my free time to
              study, practice, and build as much as I possibly can with code.
            </p>
          </ColTwo>
        </DetailsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  margin: 3rem auto 0 auto;
  display: block;
  text-align: center;
  width: 70%;
  z-index: 2;

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`

const HeaderTopContainer = styled.div`
  @media only screen and (min-width: 920px) {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
`

const UCLAImg = styled.img`
  width: 40%;
  margin: 0 auto;

  @media only screen and (min-width: 920px) {
    width: 20%;
  }
`

const HeaderContent = styled.div`
  @media screen and (max-width: 500px) {
    margin: 5rem auto;
    border: 2px solid transparent;
  }
`

const TextContainer = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  text-align: left;
  margin: 0 2rem;
  font-size: 2rem;
  font-family: "Playfair Display", sans-serif;
  color: #36434d;

  h3 {
    animation: fadein 2s;
    margin: 0 auto;
  }

  #mobile {
    display: none;
  }

  .gold-text {
    color: #fecc27;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
    margin: 3rem auto;
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

  h3 {
    font-size: 0.75rem;
    color: #828282;
    font-family: "Open Sans", sans-serif;
  }
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
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
  text-align: left;

  @media screen and (max-width: 700px) {
    padding: 0;
    margin-top: 1.5rem;
    width: 100%;
  }
`
