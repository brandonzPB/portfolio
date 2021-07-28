import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavLayout from "../components/Nav/NavLayout"
import ProjectLayout from "../components/Project/ProjectLayout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import ProjectFooter from "../components/Project/ProjectFooter"

const Republic_310 = () => {
  const data = useStaticQuery(graphql`
    query MyRepublicShopifyImages {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: {
            in: [
              "republic-shopify-0"
              "republic-shopify-1"
              "republic-shopify-2"
              "republic-shopify-3"
              "republic-shopify-4"
              "republic-shopify-5"
              "republic-shopify-6"
              "republic-shopify-7"
              "republic-shopify-8"
              "republic-shopify-9"
              "republic-shopify-A"
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

  const images = data.allFile.edges
    .map(img => {
      return {
        name: img.node.name,
        fluid: img.node.childImageSharp.fluid,
        src: img.node.childImageSharp.fluid.src,
      }
    })
    .sort((a, b) => {
      if (a.name > b.name) return -1
      return 1
    })
    .reverse()

  console.log("images", images)

  const thumbnail = images[images.length - 1]
  const screenshots = images.slice(0, images.length - 1)

  const details = `
    This is the Shopify site I made for a startup company I worked
    with.
  `

  const stack = [
    "Shopify Liquid",
    "vanilla JavaScript",
    "CSS",
    "Adobe Photoshop",
  ]

  const link = "https://republic310.com"

  const sourceCode = "#"

  const purpose = `
    A startup company came to me in need of a website and graphic design. Due to their small budget, 
    they could not afford a whole team of individuals with different skills; fortunately, I was able to
    offer my solutions and help them meet their needs. And thus, the most cost-effective solution was 
    to launch their business with Shopify and continue with it until they were able to switch to the 
    full-stack template I made (link below). Not only was I able to produce the websites for them, but I 
    also completed the graphic design work by creating the logo and labels with Adobe Photoshop.
  `

  const tech = `
    This project is quite simple as I only used Shopify Liquid, CSS, and a bit of vanilla JavaScript to 
    build and design a custom theme. 
  `

  const lessons = `
    I learned a surprising amount from completing this version of their website. Essentially, I gained
    a greater understanding of Shopify Liquid and how to use it more effectively. Moreover, I picked up
    some neat Photoshop techniques and tricks along the way. Lastly, I learned a lot about the business side
    of e-commerce, and was able to put my economics degree to good use while assisting the team in 
    planning and executing the most cost-effective solutions.
  `

  const alt1 = `The landing page of The Republic 310.`

  const alt2 = "blank"

  const otherA = {
    link: "/Creatures_of_Habit",
    title: "Creatures of Habit",
    alt:
      "Serene painting of a light blue sky, a grassy field, and the ocean in between",
    name: "painting-creatures",
  }

  const otherB = {
    link: "/Republic_310",
    title: "The Republic 310",
    alt: "Logo of The Republic 310",
    name: "republic310-0",
  }

  const projectProps = {
    title: "The Republic 310 (Shopify version)",
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
        <SEO title="The Republic 310 (Shopify version) | BZWEB" />
        <Project projectProps={projectProps} />
        <ProjectFooter otherA={otherA} otherB={otherB} />
      </ProjectLayout>
    </NavLayout>
  )
}

export default Republic_310
