import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';

import PostPreview from './PostPreview';

import '../../css/index.css';

export default function Index({ data }) {
  const posts = data;

  const PostPreviewComponents = posts.filter(post => post.frontmatter.title.length > 0)
    .map(post => {
      const postObj = {
        title: post.frontmatter.title,
        path: post.frontmatter.path,
        date: post.frontmatter.date,
        excerpt: post.excerpt,
        tags: post.frontmatter.tags
      }
      return (
        <PostPreview
          key={post.key}
          post={postObj}
        />
      )
    });

  return (
    <div className="blog-posts">
      <Helmet title={`The Stoic Programmer | Brandon Zirulnikoff`} />
      
      <IndexContainer>
        <TagHeader>
          <TagsLink to="/tags">Browse Tags</TagsLink>
        </TagHeader>

        <InnerContainer>
          {PostPreviewComponents}
        </InnerContainer>
      </IndexContainer>
    </div>
  )
}

const IndexContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 2rem 0 0 0;
  margin: 0 auto;
  background: linear-gradient(0.25turn,
    transparent,
    rgba(255, 255, 255, 1)
  );
`;

const TagHeader = styled.span`
  display: block;
  fontSize: 1.5rem;
  margin: 2rem auto;
  text-align: center;
`;

const TagsLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid black;
  transition: border-bottom 0.3s ease 0s;
  color: black;
  text-align: center;
  font-size: 1.75rem;

  &:hover {
    color: #48CEF7;
    border-bottom: transparent;
  }
`;

const InnerContainer = styled.div`
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

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             path
//             tags
//           }
//         }
//       }
//     }
//   }
// `;
