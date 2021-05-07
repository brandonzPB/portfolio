import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import SEO from '../components/seo';
import TaggedPostsContainer from '../components/Blog/TaggedPostsContainer';

const LearnDataStructures = () => {
  const data = useStaticQuery(graphql`
    query DataStructurePosts {
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

  const dataStructuresPosts = data.allMarkdownRemark.edges.filter(({ node }) => {
    return node.frontmatter.tags.indexOf('DataStructures') > -1;
  });

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
      <TaggedPostsContainer posts={dataStructuresPosts} />
    </BlogLayout>
  )
}

export default LearnDataStructures;
