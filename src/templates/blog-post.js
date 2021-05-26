import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { HiPuzzle } from 'react-icons/hi';

import '../css/blog-post.css';

import BlogLayout from '../components/Blog/BlogLayout';
import Footer from '../components/Footer';
import MyIcon from '../components/Blog/MyIcon';

export default function Template({ data }) {
  // data is injected with GraphQL query
  const { markdownRemark: post } = data; // data.markdownRemark holds post data

  const TagComponents = post.frontmatter.tags.map((tag, index) => (
    <TagListItem key={index}>
      <HiPuzzle id="puzzle" />
      <TagLink to={`/tags`}>{tag}</TagLink>
    </TagListItem>
  ));

  return (
    <BlogLayout>
      <Helmet title={`Learn with The Stoic Programmer - ${post.frontmatter.title}`} />

      <BlogPostContainer>
        <BrowseText>
          <BrowseLink to="/learn">Browse Posts</BrowseLink>
        </BrowseText>

        <PostContent>
          <PostTitle>{post.frontmatter.title}</PostTitle>

          <PostInfo>
            Posted by Brandon&nbsp;
            <MyIcon />
            &nbsp;on {post.frontmatter.date}
          </PostInfo>

          <TagList>
            {TagComponents}
          </TagList>

          <InnerHtmlContainer>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </InnerHtmlContainer>
        </PostContent>
      </BlogPostContainer>
    </BlogLayout>
  )
}

const BlogPostContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 2rem 0 0 0;
  margin: 0 auto;
  background: linear-gradient(0.25turn,
    transparent,
    rgba(255, 255, 255, 0.7)
  );
`;

const BrowseText = styled.p`
  display: block;
  fontSize: 1.5rem;
  margin: 2rem auto;
  text-align: center;
`;

const BrowseLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid #0070b7;
  transition: border-bottom 0.3s ease 0s;
  color: #0070b7;
  text-align: center;
  font-size: 1.75rem;

  &:hover {
    color: #48CEF7;
    border-bottom: transparent;
  }
`;

const PostContent = styled.div`
  border-radius: 10px;
  width: 90%;
  height: auto;
  padding: 3rem 0;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostTitle = styled.h1`
  color: black;
  font-size: 3rem;
  margin: 0 auto 2.5rem auto;
`;

const PostInfo = styled.p`
  margin: 0 auto 1rem auto;
  width: 60%;
  text-align: center;
  color: #828282;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
`;

const TagListItem = styled.div`
  @keyframes jiggle {
    0% {
      transform: rotate(10deg);
    }

    20% {
      transform: rotate(-10deg);
    }

    40% {
      transform: rotate(10deg);
    }

    60% {
      transform: rotate(-10deg);
    }

    80% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(-10deg);
    }
  }

  border: 1px solid #0070b7;
  border-radius: 5px;
  padding: 0.25rem 0;
  text-align: center;
  width: 7rem;
  color: #0070b7;

  &:hover {
    color: #5ED3F3;
    border-color: #5ED3F3;
  }

  #puzzle {
    font-size: 0.75rem;
  }
`;

const TagLink = styled(Link)`
  text-decoration: none;
  font-size: 0.75rem;
  margin: 0 0.25rem;
  color: #0070b7;

  &:active, &:link {
    color: #0070b7;
  }

  &:hover {
  color: #5ED3F3;
  }
`;

const InnerHtmlContainer = styled.div`
  margin: 2rem auto;
  background: none;
  width: 80%;
  font-size: 1.15rem;
`;

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
