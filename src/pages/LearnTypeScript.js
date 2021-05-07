import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import SEO from '../components/seo';
import TaggedPostsContainer from '../components/Blog/TaggedPostsContainer';

const LearnTypeScript = () => {
  const data = useStaticQuery(graphql`
    query TSPosts {
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

  const tsPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
    return node.frontmatter.tags.indexOf('TypeScript') > -1;
  });

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
      <TaggedPostsContainer posts={tsPosts} />
    </BlogLayout>
  )
}

export default LearnTypeScript;
