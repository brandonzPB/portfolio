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

  const details = `This is the first front-end project I ever made for the sole purpose of
    putting my skills and knowledge into practice. I included it in my portfolio to show the progress I've made
    since my first month of programming.`

  const stack = [
    "React (JavaScript)",
    "React Context API",
    "HTML5",
    "CSS",
    "vanilla JavaScript",
  ]

  const link = "https://brandonzpb.github.io/battleship"

  const sourceCode = "https://github.com/brandonzpb/battleship"

  const purpose = `I made this app so that I could develop my newly-acquired skills. I realized that the best way to 
    improve as a programmer would be to create a game, and I thought creating a clone of Battleship would be a good start.`

  const tech = `This app uses React, HTML, CSS, and vanilla JavaScript, because it is what I was learning at the time. 
    I used this technologies to create this project to see if I enjoyed building with them. As it turns out: I did!`

  const lessons = `Although this project is incredibly simple and lacks originality in its overall concept, I gained a wealth
    of knowledge from building it. The biggest problem was designing the gameboard and figuring out how to setup the ships for each player.
    In the end, I determined that the user's experience would be best if I setup the ships for them. As a result, I created an algorithm
    that placed the differently-sized ships in random positions.`

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
