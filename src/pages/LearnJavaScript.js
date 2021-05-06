import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import SEO from '../components/seo';

const LearnJavaScript = () => {
  const data = useStaticQuery(graphql`
    query JSPosts {
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

  const jsPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
    return node.frontmatter.tags.indexOf('JavaScript') > -1;
  });

  console.log('jsPosts', jsPosts);

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
    </BlogLayout>
  )
}

export default LearnJavaScript;
