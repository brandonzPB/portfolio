import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import '../css/blog-post.css';

import NavLayout from '../components/Nav/NavLayout';
import BlogLayout from '../components/Blog/BlogLayout';
import BlogPost from '../components/Blog/BlogPost';
import SEO from '../components/seo';

export default function Template({ data }) {
  // data is injected with GraphQL query
  const { markdownRemark: post } = data; // data.markdownRemark holds post data

  return (
    <NavLayout layout={'blog'}>
      <BlogLayout>
        <Helmet title={`Learn with The Stoic Programmer - ${post.frontmatter.title}`} />
        <SEO title="Learn with the Stoic Programmer" />

        <BlogPost post={post} />
      </BlogLayout>
    </NavLayout>
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
