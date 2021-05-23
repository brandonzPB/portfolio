import React from 'react';
import styled from 'styled-components';
import PostPreview from './PostPreview';
import { v4 as uuid } from 'uuid'; 

const TaggedPostsContainer = ({ posts }) => {
  // make post components: thumbnails of each post with the related tag
  const PostComponents = posts.map((post) => {
    console.log('post', post);
    const contentPreview = post.node.html.slice(8, 150) + '...';

    const postObj = {
      title: post.node.frontmatter.title,
      date: post.node.frontmatter.date,
      path: post.node.frontmatter.path,
      tags: post.node.frontmatter.tags,
      excerpt: contentPreview,
    }

    return (
      <PostPreview 
        post={postObj}
        key={uuid()}
        inTags={true}
        setTag={null}
      />
    )
  });

  return (
    <PostsContainer>
      {PostComponents}
    </PostsContainer>
  )
}

export default TaggedPostsContainer;

const PostsContainer = styled.div``;
