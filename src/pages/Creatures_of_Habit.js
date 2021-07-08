import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavLayout from "../components/Nav/NavLayout"
import ProjectLayout from "../components/Project/ProjectLayout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import ProjectFooter from "../components/Project/ProjectFooter"

const Creatures_of_Habit = () => {
  const data = useStaticQuery(graphql`
    query MyCreatures {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["creatures-0", "creatures-1"] }
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
    The project that started it all. 
    I wanted a way to quantify areas of my life that are inherently qualitative (e.g., mental health, philosophy, etc.). 
    So I set out on learning to program from a background with zero prior experience or expertise, 
    and I ended up creating a "full-stack" web application that me and my friends use today.
  `

  const stack = [
    "React (JavaScript)",
    "React Context API",
    "CSS",
    "NodeJS",
    "Express",
    "NoSQL",
    "JSONWebTokens",
    "bcrypt",
    "MongoDB",
    "Heroku",
  ]

  const link = "https://brandonzpb.github.io/creatures"

  const sourceCode = "https://github.com/brandonzpb/creatures"

  const purpose = `
    After seeing so many "Life RPG" apps, I was inspired to make my own version that had all the features I wanted 
    that the others lacked. So the purpose of this app is to do just that: provide a nostalgic alternative 
    to apps that measure areas of your life the way a video game measures experience points and character evolution.
  `

  const tech = `
    I used React to create this project because it seemed like the best choice, with its packages, hooks, and state management. 
    I also used NodeJS and Express to create the server because I really enjoy building with JavaScript and I was eager to learn how to 
    make a "full-stack" web app with just one programming language. I also used MongoDB because of the scalable cloud services it provides. 
  `

  const lessons = `
    The number of lessons I learned from this project alone is too many to detail in a simple paragraph! 
    Firstly, due to the complex structure of the "creature" objects, I learned a tremendous amount about the importance of refactoring code 
    and building a project that is clean and easy to maintain. 
    I also learned about the importance of writing unit tests before coding any of the project itself. 
    Another important concept I learned was the necessity of having a plan when designing any project: I learned what 
    works for me, how to mitigate my weaknesses, and make great use of my strengths. I used this plan when creating mindful.io.
  `

  const alt1 =
    "A serene painting of a light blue sky, a grassy field, and the ocean"

  const alt2 = `Screenshot of the Creatures of Habit app; 
    a Pokemon called Porygon with a nickname of duck.js has various habits, 
    such as studying and practing
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
    link: "/Mindful",
    title: "mindful.io",
    alt: "Peaceful image with black stones and bamboo in the background",
    name: "painting-mindful",
  }

  const projectProps = {
    title: "Creatures of Habit",
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
    icon: "creatures",
  }

  return (
    <NavLayout>
      <ProjectLayout>
        <SEO title="Creatures of Habit (Pokémon version) | BZWEB" />
        <Project projectProps={projectProps} />
        <ProjectFooter otherA={otherA} otherB={otherB} />
      </ProjectLayout>
    </NavLayout>
  )
}

export default Creatures_of_Habit
