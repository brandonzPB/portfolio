import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import '../css/blog-post.css';

import BlogLayout from '../components/Blog/BlogLayout';
import Footer from '../components/Footer';
import MyIcon from '../components/Blog/MyIcon';

export default function Template({ data }) {
  // data is injected with GraphQL query
  const { markdownRemark: post } = data; // data.markdownRemark holds post data

  const TagComponents = post.frontmatter.tags.map((tag, index) => (
    <TagListItem key={index}>
      <Tag>
        <TagLink to={`/tags`}>#{tag}</TagLink>
      </Tag>
    </TagListItem>
  ));

  return (
    <BlogLayout>
      <BlogPostContainer>
        <Helmet title={`Learn with The Stoic Programmer - ${post.frontmatter.title}`} />

        <PostContent>
          <BrowseTexts>
            <BrowseLink to="/learn">Browse Posts</BrowseLink>
          </BrowseTexts>

          <PostTitle>{post.frontmatter.title}</PostTitle>

          <PostInfo>
            Posted by Brandon&nbsp;
            &nbsp; <MyIcon />
            &nbsp;on {post.frontmatter.date}
          </PostInfo>

          <TagList>
            {TagComponents}
          </TagList>

          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostContent>

        <Footer />
      </BlogPostContainer>
    </BlogLayout>
  )
}

const BlogPostContainer = styled.div``;

const PostContent = styled.div``;

const PostContent = styled.p``;

const BrowseLink = styled(Link)``;

const PostContent = styled.h1``;

const PostInfo = styled.p``;

const TagList = styled.ul``;

const TagListItem = styled.li`
  list-style-type: none;
`;

const Tag = styled.h1``;

const TagLink = styled(Link)``;

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
