import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import '../css/blog-post.css';

export default function Template({ data }) {
  // data is injected with GraphQL query
  const { markdownRemark: post } = data; // data.markdownRemark holds post data

  const TagComponents = post.frontmatter.tags.map((tag, index) => (
    <li className="tag-list-item" style={{ listStyleType: 'none' }} key={index}>
      <h1>
        <Link to={`/tags/${tag}`}>#{tag}</Link>
      </h1>
    </li>
  ));

  return (
    <div className="blog-post-container">
      <Helmet title={`BZ Learning - ${post.frontmatter.title}`} />

      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>

        <ul className="tag-list">
          {TagComponents}
        </ul>

        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
