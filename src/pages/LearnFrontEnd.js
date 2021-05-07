import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import SEO from '../components/seo';
import TaggedPostsContainer from '../components/Blog/TaggedPostsContainer';

const LearnFrontEnd = () => {
  const data = useStaticQuery(graphql`
    query FrontEndPosts {
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

  const frontEndPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
    return node.frontmatter.tags.indexOf('FrontEnd') > -1;
  });

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
      <TaggedPostsContainer posts={frontEndPosts} />
    </BlogLayout>
  )
}

export default LearnFrontEnd;
