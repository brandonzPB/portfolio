import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ProjectPreview from "./ProjectPreview"
import { projects } from "../../data/projects"

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
              "republic310-0"
              "visitwidget-0"
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

  const thumbnails = [...data.allFile.edges].sort((a, b) => {
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

  const ProjectComponents = projects.map((project, idx) => {
    const node = thumbnails.filter(img => img.node.name === project.img.name)

    return <ProjectPreview key={idx} node={node} project={project} />
  })

  return (
    <ProjectListContainer>
      <h1>Projects I've Worked On</h1>

      <List
        style={{ display: display.status ? "block" : "none" }}
        ref={projectRef}
      >
        {ProjectComponents}
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
