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
    return {
      ...node,
      key: uuidv4(),
      excerpt: node.html.slice(8, 150) + '...'
    }
  });

  return (
    <BlogLayout>
      <SEO title="Learn with the Stoic Programmer" />

      <TagHeader>
        <TagsLink to="/tags">Browse Tags</TagsLink>
      </TagHeader>
      
      <BlogIndex data={postData} />
    </BlogLayout>
  )
}

export default Learning;

const TagHeader = styled.span`
  display: block;
  fontSize: 1.5rem;
  margin: 2rem auto;
  text-align: center;
`;

const TagsLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid #0070b7;
  transition: border-bottom 0.3s ease 0s;
  color: #0070b7;
  text-align: center;

  &:hover {
    color: #48CEF7;
    border-bottom: transparent;
  }
`;
