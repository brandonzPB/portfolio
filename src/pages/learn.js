import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import BlogLayout from "../components/Blog/BlogLayout"
import BlogIndex from '../components/Blog/BlogIndex';
import SEO from "../components/seo"

const Learning = () => {
  const data = useStaticQuery(graphql`
    query MyBlogPosts {
      allMarkdownRemark {
        edges {
          node {
            html
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
    const contentPreview = node.html.slice(3, 150) + '...';
    const reg = new RegExp('<br>', 'g');
    const excerpt = contentPreview.replace(reg, ' ');

    return {
      ...node,
      key: uuidv4(),
      excerpt: excerpt,
    }
  });

  return (
    <BlogLayout>
      <SEO title="Learn with the Stoic Programmer" />
      
      <BlogIndex data={postData} />
    </BlogLayout>
  )
}

export default Learning;
