import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavLayout from "../components/Nav/NavLayout"
import ProjectLayout from "../components/Project/ProjectLayout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import ProjectFooter from "../components/Project/ProjectFooter"

const Republic_310 = () => {
  const data = useStaticQuery(graphql`
    query MyRepublicImages {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: {
            in: [
              "republic-0"
              "republic-1"
              "republic-2"
              "republic-3"
              "republic310-0"
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

  let images = data.allFile.edges
    .map(img => {
      return {
        name: img.node.name,
        fluid: img.node.childImageSharp.fluid,
        src: img.node.childImageSharp.fluid.src,
      }
    })
    .sort((a, b) => {
      if (a.name > b.name) return -1
      else return 1
    })
    .reverse()

  const thumbnail = images[images.length - 1]
  const screenshots = images.slice(0, images.length - 1)

  const details = `
    This is website I made for a startup company.
    They decided to switch to Shopify due to their budget, so 
    this website is currently not active (anything you purchase will be void; 
      no products will be sent to you if you use this site).
  `

  const stack = [
    "React (TypeScript)",
    "React Context API",
    "CSS",
    "NodeJS",
    "Express",
    "JSONWebTokens",
    "bcrypt",
    "NoSQL",
    "MongoDB",
  ]

  const link = "https://brandonzpb.github.io/republic310"

  const sourceCode = "https://github.com/brandonzpb/republic310"

  const purpose = `
    The startup company I was working with wanted their own full-stack website, 
    so I used my knowledge to make one for them. I completed this project 
    entirely on my own.
  `

  const tech = `
    I used React to make this project come to life. For the backend, I used the same backend combo of
    Express, MongoDB, and NoSQL that I used for my previous project.
    However, I wanted to challenge myself to use something that was completely new to me: TypeScript. 
    Initially, I felt intimidated at seeing the complexity of one's code once it's "translated" from JavaScript
    to clean, effective TypeScript. However, after working with it, seeing its advantages over regular JavaScript,
    and ultimately learning how to write cleaner code with fewer bugs--I fell in love. Although it's only been
    a month, imagining myself coding with vanilla JavaScript just feels irresponsible and reckless. (I also got 
      to improve my Photoshop skills with the graphic designing I did for the logos and some labels!)
  `

  const lessons = `
    I've acquired a tremenous amount of wisdom while working on this project. I also
    got to use some of the knowledge I've acquired since studying data structures and algorithms.
    Firstly, I needed a way to sort a variable array of objects by a variable key. I created a little 
    module that uses the quicksort algorithm to sort by the given keys.
    Secondly, I learned more about how to optimize React's rendering, as well as the server (I will be shifting to 
      faster options in the near future, with the likes of TypeORM, Type-GraphQL, and Redis).
    Lastly, I've not only learned a lot about better practices for writing code in a 
    reusable fashion, but also found a wealth of resources to dive into and further my knowledge and ability to work with everything
    React has to offer. I certainly would not have grown without electing to use TypeScript over JavaScript for this project, nor would
    I have been directed down a far more grand path of wisdom, knowledge, and practice so soon in my career. The difficulties of learning
    to use TypeScript have been an absolute blessing.
  `

  const alt1 = `The landing page of The Republic 310. The banner is of two female surfers walking along
    an empty beach, holding surfboards.
  `

  const alt2 = "blank"

  const otherA = {
    link: "/Republic_310_Shopify",
    title: "The Republic 310 (Shopify)",
    alt: "An alternate logo of The Republic 310",
    name: "republic310-2",
  }

  const otherB = {
    link: "/Mindful",
    title: "mindful.io",
    alt: "Peaceful image with black stones and bamboo in the background",
    name: "painting-mindful",
  }

  const projectProps = {
    title: "The Republic 310",
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
    icon: "republic",
  }

  return (
    <NavLayout>
      <ProjectLayout>
        <SEO title="The Republic 310 | BZWEB" />
        <Project projectProps={projectProps} />
        <ProjectFooter otherA={otherA} otherB={otherB} />
      </ProjectLayout>
    </NavLayout>
  )
}

export default Republic_310
