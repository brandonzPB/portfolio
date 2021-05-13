import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import SEO from '../components/seo';
import TagIndex from '../components/Blog/TagIndex';

const Tags = () => {
  const data = useStaticQuery(graphql`
    query MyTags {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              tags
              path
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <BlogLayout>
      <SEO title="BZ Learning" />
      <TagIndex data={data} />
    </BlogLayout>
  )
}

export default Tags;
