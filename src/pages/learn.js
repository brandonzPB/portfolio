import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

import BlogLayout from "../components/Blog/BlogLayout"
import Index from '../components/Blog/index';
import SEO from "../components/seo"

const Learning = () => {
  const data = useStaticQuery(graphql`
    query MyBlogPosts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              tags
              path
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  const postData = data.allMarkdownRemark.edges.map(({ node }) => {
    return {
      ...node,
      key: uuidv4()
    }
  });

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
      <Index data={postData} />
    </BlogLayout>
  )
}

export default Learning;
