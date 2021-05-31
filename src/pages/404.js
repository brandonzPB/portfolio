import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query MyThinker {
      allFile(filter: {
        ext: {
          regex: "/(png)|(jpg)|(jpeg)/"
        },
        name: {
          in: "thinker"
        }
      }) {
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
  `);

  const thinker = {
    fluid: data.allFile.edges[0].node.childImageSharp.fluid,
    alt: 'An image of the sculpture, The Thinker'
  };

  return (
    <Layout>
      <SEO title="Error 404: Page not found | BZWEB" />
      <Container>
        <h1>Page Not Found</h1>

        <PContainer>
          <p>You may be wondering how you landed in this strange place. Fear not, for nothing is an accident.</p>
          <p>Perhaps your curiosity got the better of you. How grand! I can recall many instances during which I did just the same.</p>
          <p>Fortunately for you, there is no consequence for trying to find a page in my website that does not exist.</p>
          <p>Cheers to your curiosity, fellow creature!</p>
        </PContainer>
        
        <ThinkerImage fluid={thinker.fluid} alt={thinker.alt} />
      </Container>
    </Layout>
  )
}

export default NotFoundPage;

const Container = styled.div`
  margin: 2rem auto;
  text-align: center;

  h1 {
    margin: 2rem auto;
  }
`;

const PContainer = styled.div`
  margin: 1rem auto;
`;

const ThinkerImage = styled(Img)`
  width: 50%;
  text-align: center;
  margin: 0 auto;
`;
