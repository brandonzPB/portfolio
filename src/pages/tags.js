import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import SEO from '../components/seo';

const Tags = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  // const TagComponents = data.allMarkdownRemark.edges.map(({ node }, index) => (
  //   <li key={index} className="tag-list-item">
  //     <span className="tag-list-text"></span>
  //   </li>
  // ))

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
    </BlogLayout>
  )
}

export default Tags;
