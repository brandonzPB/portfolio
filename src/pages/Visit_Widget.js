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

  const details = `The mobile app of a startup company I am currently working with.
    I am offering consulting services to Visit Widget, in addition to improving 
    upon their code base with React Native and Jest unit testing. (Disclaimer: I do not
      own this app.)`

  const stack = [
    "React Native (JavaScript)",
    "Jest Unit Testing",
    "vanilla JavaScript",
  ]

  const link = "https://visitwidget.com/"

  const sourceCode = "#"

  const purpose = `Visit Widget came to me with the interest of working together. After meeting two of the
    team members and getting to know them very briefly, I quickly wanted to jump on board with the team. The
    app provides a great service to users and is excellently designed, visually, conceptually, and programatically.
    I have been improving upon the codebase by writing unit tests in Jest, in addition to improving upon the app
    itself with React Native.`

  const tech = `I have been updating the app with Jest and React Native. It is my understanding that
    I will eventually work with Xcode. Fingers crossed!`

  const lessons = `Working with Visit Widget has taught me an immense amount of knowledge and wisdom, both with 
    regards to programming and running a business. I've learned how to approach problems more analytically
    and in terms of the specific variables, functions, and modules required that pose as my constraints. It has
    improved my ability to use the given toolset and data pool and efficiently develop a strategy for the 
    goal/functionality I wish to achieve, while keeping edge-cases in mind. It's great practice for the core of 
    computer programming and debugging: I've built patience, resolve, and the ability to quickly parse through 
    my code and any error messages to find relevant information. I know unit testing may seem dull and monotonous, 
    but it is without a doubt one of the best means of practicing and developing your skills as a programmer. I 
    can't recommend it enough!`

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
