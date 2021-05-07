import React from 'react';
import styled from 'styled-components';
import PostPreview from './PostPreview';

const TaggedPostsContainer = ({ posts }) => {
  console.log('posts', posts);

  // make post components: thumbnails of each post with the related tag
  const PostComponents = [];

  return (
    <PostsContainer>
      {PostComponents}
    </PostsContainer>
  )
}

export default TaggedPostsContainer;

const PostsContainer = styled.div``;
