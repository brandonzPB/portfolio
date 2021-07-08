import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const UCLA = () => {
  const data = useStaticQuery(graphql`
    query myUCLA {
      allFile(
        filter: { ext: { regex: "/(png)/" }, name: { in: "ucla_econ_code" } }
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

  const uclaImage = {
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    src: data.allFile.edges[0].node.childImageSharp.fluid.src,
    alt:
      "A sphere with the UCLA Economics logo on it on a background of Python code",
  }

  return (
    <UCLAImage
      alt={uclaImage.alt}
      fluid={uclaImage.fluid}
      src={uclaImage.src}
    />
  )
}

export default UCLA

const UCLAImage = styled(Img)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  width: 80%;
  margin: 0 auto;
  animation: fadein 2s;

  @media only screen and (min-width: 920px) {
    width: 25%;
    margin-right: 4rem;
  }
`
