import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ProjectPreview from "./ProjectPreview"

const ProjectList = ({ modalState }) => {
  const data = useStaticQuery(graphql`
    query MyPaintings {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: {
            in: [
              "painting-creatures"
              "painting-mindful"
              "painting-battleship"
              "republic310-2"
            ]
          }
        }
      ) {
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
  `)

  const paintings = [...data.allFile.edges].sort((a, b) => {
    if (a.node.name < b.node.name) return -1
    if (a.node.name > b.node.name) return 1
  })

  const [display, setDisplay] = useState({ status: true })

  const projectRef = useRef(true)

  useEffect(() => {
    return () => {
      projectRef.current = false
    }
  }, [])

  useEffect(() => {
    if (projectRef.current) {
      if (modalState.display) {
        setDisplay({ status: false })
      } else if (!modalState.dipslay) {
        setDisplay({ status: true })
      }
    }
  }, [modalState, setDisplay, projectRef])

  return (
    <ProjectListContainer>
      <h1>Projects I've Made</h1>

      <List
        style={{ display: display.status ? "block" : "none" }}
        ref={projectRef}
      >
        <ProjectPreview
          details={`
            I made this project to help users quantify 
            areas of their life that are intrinsically 
            qualitative (e.g., mental health).
          `}
          img={{
            fluid: paintings[1].node.childImageSharp.fluid,
            src: paintings[1].node.childImageSharp.fluid.src,
            alt:
              "Painting of a lake, a grassy plain, and a pretty blue sky with some clouds",
          }}
          link={"/Creatures_of_Habit"}
          title={"Creatures of Habit"}
        />

        <ProjectPreview
          details={`
            I made this project for an e-commerce 
            startup who wanted their own full-stack website.
          `}
          img={{
            fluid: paintings[3].node.childImageSharp.fluid,
            src: paintings[3].node.childImageSharp.fluid.src,
            alt: "The logo of the company The Republic 310",
          }}
          link={"/Republic_310"}
          title={"The Republic 310"}
        />

        <ProjectPreview
          details={`
            The Shopify version of the website I made for 
            The Republic 310 (this is their current site).
          `}
          img={{
            fluid: paintings[3].node.childImageSharp.fluid,
            src: paintings[3].node.childImageSharp.fluid.src,
            alt: "The logo of the company The Republic 310",
          }}
          link={"/Republic_310"}
          title={"The Republic 310"}
        />

        <ProjectPreview
          details={`
            I made this project for the purpose of helping 
            users to become more mindful in their daily life.
          `}
          img={{
            fluid: paintings[2].node.childImageSharp.fluid,
            src: paintings[2].node.childImageSharp.fluid.src,
            alt:
              "A painting of a really relaxing setting: heated rocks and bamboo",
          }}
          link={"/Mindful"}
          title={"mindful.io"}
        />

        <ProjectPreview
          details={`
            This was the first project I made solely for the 
            purpose of putting my skills into practice.
          `}
          img={{
            fluid: paintings[0].node.childImageSharp.fluid,
            src: paintings[0].node.childImageSharp.fluid.src,
            alt:
              "A painting of a really relaxing setting: heated rocks and bamboo",
          }}
          link={"/Battleship"}
          title={"Battleship"}
        />
      </List>
    </ProjectListContainer>
  )
}

export default ProjectList

const ProjectListContainer = styled.div``

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
