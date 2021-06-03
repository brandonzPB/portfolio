import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

import NavLayout from '../components/Nav/NavLayout';
import BlogLayout from "../components/Blog/BlogLayout";
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
    <NavLayout layout={'blog'}>
      <BlogLayout>
        <SEO title="Learn about the Best Full-stack Tech with the Stoic Programmer | BZWEB" />
        
        <BlogIndex data={postData} />
      </BlogLayout>
    </NavLayout>
  )
}

export default Learning;
