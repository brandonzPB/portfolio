import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import '../../css/index.css';

export default function Index({ data }) {
  const posts = data;

  return (
    <div className="blog-posts">
      <Helmet title={`BZ Learning`} />
      
      {posts
        .filter(post => post.frontmatter.title.length > 0)
        .map((post) => {
          return (
            <div className="blog-post-preview" key={post.key}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`;
