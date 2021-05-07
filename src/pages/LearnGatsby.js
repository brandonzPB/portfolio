import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import SEO from '../components/seo';
import TaggedPostsContainer from '../components/Blog/TaggedPostsContainer';

const LearnGatsby = () => {
  const data = useStaticQuery(graphql`
    query GatsbyPosts {
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

  const gatsbyPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
    return node.frontmatter.tags.indexOf('Gatsby') > -1;
  });

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
      <TaggedPostsContainer posts={gatsbyPosts} />
    </BlogLayout>
  )
}

export default LearnGatsby;
