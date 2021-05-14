import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import '../css/blog-post.css';
import BlogHeader from '../components/Blog/BlogHeader';
import Footer from '../components/Footer';
import MyIcon from '../components/Blog/MyIcon';

export default function Template({ data }) {
  // data is injected with GraphQL query
  const { markdownRemark: post } = data; // data.markdownRemark holds post data

  const TagComponents = post.frontmatter.tags.map((tag, index) => (
    <li className="tag-list-item" style={{ listStyleType: 'none' }} key={index}>
      <h1>
        <Link to={`/Learn${tag}`}>#{tag}</Link>
      </h1>
    </li>
  ));

  return (
    <div className="blog-post-container">
      <Helmet title={`Learn with The Stoic Programmer - ${post.frontmatter.title}`} />
      
      <BlogHeader />

      <div className="blog-post">
        <span>
          <Link to="/learn">Browse Posts</Link>
        </span>
        <h1>{post.frontmatter.title}</h1>

        <span>
          Posted by&nbsp;
          <Link to="/learn/Brandon">Brandon</Link>
          &nbsp; <MyIcon />
          &nbsp;on {post.frontmatter.date}
        </span>

        <ul className="tag-list">
          {TagComponents}
        </ul>

        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <Footer />
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
