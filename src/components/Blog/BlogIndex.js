import React from 'react';
import { Helmet } from 'react-helmet';

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
      
      {PostPreviewComponents}
    </div>
  )
}

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
