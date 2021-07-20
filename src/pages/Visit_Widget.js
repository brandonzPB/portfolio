import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import NavLayout from "../components/Nav/NavLayout"
import ProjectLayout from "../components/Project/ProjectLayout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import ProjectFooter from "../components/Project/ProjectFooter"

const Visit_Widget = () => {
  let images
  // const images = data.allFile.edges.map(img => {
  //   return {
  //     fluid: img.node.childImageSharp.fluid,
  //     src: img.node.childImageSharp.fluid.src,
  //   }
  // })

  const thumbnail = images[images.length - 1]
  thumbnail.alt = ""

  const screenshots = images.slice(0, images.length - 1)

  const details = ``

  const stack = [
    "React Native (JavaScript)",
    "Jest Unit Testing",
    "vanilla JavaScript",
  ]

  const link = "https://visitwidget.com/"

  const sourceCode = "#"

  const purpose = ``

  const tech = ``

  const lessons = ``

  const otherA = {
    link: "/Republic_310",
    title: "The Republic 310",
    alt: `The landing page of The Republic 310. The banner is of two female surfers walking along
      an empty beach, holding surfboards
    `,
    name: "republic310-0",
  }

  const otherB = {
    link: "/Republic_310_Shopify",
    title: "The Republic 310 (Shopify)",
    alt: "An alternate logo of The Republic 310",
    name: "republic310-2",
  }

  const projectProps = {
    title: "Visit Widget",
    details,
    stack,
    link,
    sourceCode,
    purpose,
    tech,
    lessons,
    thumbnail,
    screenshots,
    icon: "visitwidget",
  }

  return (
    <NavLayout>
      <ProjectLayout>
        <SEO title="Visit Widget | BZWEB" />
        <Project projectProps={projectProps} />
        <ProjectFooter otherA={otherA} otherB={otherB} />
      </ProjectLayout>
    </NavLayout>
  )
}

export default Visit_Widget
