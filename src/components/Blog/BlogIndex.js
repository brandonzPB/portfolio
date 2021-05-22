import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import PostPreview from './PostPreview';

import '../../css/index.css';

export default function Index({ data }) {
  const posts = data;

  const PostPreviewComponents = posts.filter(post => post.frontmatter.title.length > 0)
    .map(post => {
      return (
        <PostPreview
          key={post.key}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          excerpt={post.excerpt}
          path={post.frontmatter.path}
          tags={post.frontmatter.tags}
        />
      )
    });

  return (
    <div className="blog-posts">
      <Helmet title={`The Stoic Programmer | Brandon Zirulnikoff`} />
      
      <IndexContainer>
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
  height: 90vh;
  padding: 3rem 0;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.3);
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
