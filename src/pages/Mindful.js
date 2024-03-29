import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavLayout from "../components/Nav/NavLayout"
import ProjectLayout from "../components/Project/ProjectLayout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import ProjectFooter from "../components/Project/ProjectFooter"

const Mindful = () => {
  const data = useStaticQuery(graphql`
    query MyMindfulImages {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["mindful-0", "mindful-1"] }
        }
      ) {
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
  `)

  const images = data.allFile.edges.map(img => {
    return {
      fluid: img.node.childImageSharp.fluid,
      src: img.node.childImageSharp.fluid.src,
    }
  })

  const thumbnail = images[images.length - 1]
  const screenshots = images.slice(0, images.length - 1)

  const details = `
    I wanted this project to be as simple as possible, since I wanted as many people as possible to benefit from it.
    I made this web app for a particular professor at UCLA who wanted a project for his students to use.
    Mindful.io provides links to guided meditation apps and videos, information on mindfulness and meditation, including benefits, 
    techniques, and exercises. I also wrote a custom list of questions to answer after the user is done meditating, 
    for the purpose of applying that calmer state and increased mindfulness to their personal life. This app is currently used by 
    my friends, family, and other students.
  `

  const stack = [
    "React (JavaScript)",
    "React Context API",
    "CSS",
    "vanilla JavaScript",
  ]

  const link = "https://brandonzpb.github.io/mindful"

  const sourceCode = "https://github.com/brandonzpb/mindful.io"

  const purpose = `
    I made this project for the purpose of helping others develop the healthy habit of meditating and being more mindful. A professor
    at UCLA wanted a project that would help improve the public's knowledge of mindfulness. They asked for me to build something
    that would help accomplish that, so I created this web app for them to use.
  `

  const tech = `
    React seemed like the best tool for the job, because I wanted to create a single-page application that is interactive and easy to use. 
    I used vanilla JavaScript to create the meditation timer and the button that saves responses to questions to the user's local device 
    (since the app does not store them).
  `

  const lessons = `
    I found myself studying a lot of CSS techniques and design principles (à la "The Design of Everyday Things" by Don Norman) while making 
    this app. 
    Initially, I customized the experience via a database that was setup to gradually 
    guide users along the mindfulness journey through questions that required an increasing level of self-honesty and integrity. 
    However, I realized that fewer people would use this app and, thus, fewer people 
    would benefit from mindfulness if they had to create an account before being able to use the app, so I completely removed the 
    backend so as to simplify and enhance the user experience.
    After understanding these techniques, I revisited Creatures of Habit and improved upon its design and user experience. 
    I used these lessons and principles when designing The Republic 310, as well.
  `

  const alt1 = "Peaceful image with black stones and bamboo in the background"

  const alt2 = `Screenshot of the mindful.io app; 
    a dashboard with a circular modal with app icons in the center. 
    Text says, 'Hover over one of the icons!'
  `

  const otherA = {
    link: "/Republic_310",
    title: "The Republic 310",
    alt: `The landing page of The Republic 310. The banner is of two female surfers walking along
      an empty beach, holding surfboards
    `,
    name: "republic310-0",
  }

  const otherB = {
    link: "/Creatures_of_Habit",
    title: "Creatures of Habit",
    alt:
      "Serene painting of a light blue sky, a grassy field, and the ocean in between",
    name: "painting-creatures",
  }

  const projectProps = {
    title: "mindful.io",
    details,
    stack,
    link,
    sourceCode,
    purpose,
    tech,
    lessons,
    thumbnail,
    screenshots,
    alt1,
    alt2,
    icon: "mindful",
  }

  return (
    <NavLayout>
      <ProjectLayout>
        <SEO title="mindful.io The Free Meditation Web App | BZWEB" />
        <Project projectProps={projectProps} />
        <ProjectFooter otherA={otherA} otherB={otherB} />
      </ProjectLayout>
    </NavLayout>
  )
}

export default Mindful
