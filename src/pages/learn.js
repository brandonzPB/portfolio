import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

import BlogLayout from "../components/Blog/BlogLayout"
import BlogIndex from '../components/Blog/index';
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

      <span>
        <Link to="/tags">Browse Tags</Link>
      </span>
      
      <BlogIndex data={postData} />
    </BlogLayout>
  )
}

export default Learning;
