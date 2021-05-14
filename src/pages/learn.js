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
      <SEO title="Learn with the Stoic Programmer" />

      <TagHeader>
        <Link to="/tags">Browse Tags</Link>
      </TagHeader>
      
      <BlogIndex data={postData} />
    </BlogLayout>
  )
}

export default Learning;

const TagHeader = styled.span`
  fontSize: 3rem;
`;
